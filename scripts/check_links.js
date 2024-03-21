const path = require('path')
const fs = require('fs')
const http = require('http')
const https = require('https')

const YAML = require('yaml')
const glob = require('glob')
const { marked } = require('marked')

const rules = glob.globSync('**/*.{yml,yaml}', { root: path.resolve(__dirname, '../rules') })

const headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0' }

const validURLs = new Map()
const promises = []
const failures = []
let failed = false

for (const filename of rules) {
  const rule = YAML.parse(fs.readFileSync(filename, 'utf8'))
  const remediationMessage = rule.metadata.remediation_message || ''

  const urls = []

  const visitAll = (tokens) => {
    if (!tokens) {
      return
    }

    for (const token of tokens) {
      visit(token)
    }
  }

  const visit = (token) => {
    if (token.type == "link") {
      if (token.href) {
        urls.push(token.href)
      }
    }

    visitAll(token.tokens)
    visitAll(token.items)
  }

  visitAll(marked.lexer(remediationMessage))

  for (const url of urls) {
    if (validURLs.has(url)) {
      if (!validURLs.get(url)) {
        failures.push({ filename, url })
      }

      continue
    }

    const protocol = url.startsWith('https') ? https : http

    promises.push(new Promise((resolve) => {
      protocol.request(url, { method: 'HEAD', headers }, (response) => {
        if (response.statusCode == 200) {
          console.info("PASS " + url)
          validURLs.set(url, true)
        } else {
          console.error("FAIL " + url)
          failures.push({ filename, url, status: response.statusCode })
          failed = true
          validURLs.set(url, false)
        }

        resolve()
      }).on('error', (e) => {
        console.error("FAIL " + url)
        failures.push({ filename, url, message: e.message })
        failed = true
        validURLs.set(url, false)

        resolve()
      }).end()
    }))
  }
}

Promise.all(promises).then(() => {
  if (failures.length != 0) {
    console.log('\n\nFailures:\n\n')
    console.log(failures)
  }

  if (failed) {
    process.exit(1)
  }
})
