const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("bad_buzz", () => {
    const testCase = "bad_buzz.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_guzzle", () => {
    const testCase = "bad_guzzle.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_httplug", () => {
    const testCase = "bad_httplug.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_laminas", () => {
    const testCase = "bad_laminas.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_laravel", () => {
    const testCase = "bad_laravel.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_pecl_http", () => {
    const testCase = "bad_pecl_http.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_requests", () => {
    const testCase = "bad_requests.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_sendgrid", () => {
    const testCase = "bad_sendgrid.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_symfony", () => {
    const testCase = "bad_symfony.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad_unirest", () => {
    const testCase = "bad_unirest.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("bad", () => {
    const testCase = "bad.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_buzz", () => {
    const testCase = "ok_buzz.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_guzzle", () => {
    const testCase = "ok_guzzle.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_httplug", () => {
    const testCase = "ok_httplug.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_laminas", () => {
    const testCase = "ok_laminas.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_laravel", () => {
    const testCase = "ok_laravel.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_pecl_http", () => {
    const testCase = "ok_pecl_http.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_requests", () => {
    const testCase = "ok_requests.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_sendgrid", () => {
    const testCase = "ok_sendgrid.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_symfony", () => {
    const testCase = "ok_symfony.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok_unirest", () => {
    const testCase = "ok_unirest.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("ok", () => {
    const testCase = "ok.php"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})
