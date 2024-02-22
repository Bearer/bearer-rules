// Use bearer:expected javascript_lang_file_permissions to flag expected findings
const fs = require("fs/promises")
const fs2 = require("fs")
const path = "./sensitive_data.txt"

async function createInsecureFile() {
  try {
    await fs.writeFile(path, "Sensitive Information")

    // bearer:expected javascript_lang_file_permissions
    await fs.chmod(path, 0o777)

    console.log(`File created with overly permissive permissions: ${path}`)
  } catch (error) {
    console.error("Error creating the file:", error)
  }
}

async function createSecureFile() {
  try {
    await fs.writeFile(path, "Sensitive Information")
    await fs.chmod(path, 0o600)

    console.log(`File created with overly permissive permissions: ${path}`)
  } catch (error) {
    console.error("Error creating the file:", error)
  }
}

export function createInsecureFileSync() {
  fs2.writeFileSync(path, "Sensitive Information")

  // bearer:expected javascript_lang_file_permissions
  fs2.chmodSync(path, 0o777)

  console.log(`File created with overly permissive permissions: ${path}`)
}

export function createSecureFileSync() {
  fs2.writeFileSync(path, "Sensitive Information")
  fs2.chmodSync(path, 0o600)

  console.log(`File created with overly permissive permissions: ${path}`)
}
