const {
  createInvoker,
  createNewInvoker,
  getEnvironment,
} = require("../../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)

  test("test", () => {
    const testCase = "main.go"
    expect(invoke(testCase)).toMatchSnapshot()
  })

  test("test 2", () => {
    const testCase = "main2.go"
    expect(invoke(testCase)).toMatchSnapshot()
  })
})

describe(`${ruleId}-xx`, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("test", () => {
    const testCase = "function.go"

    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test1", () => {
    const testCase = "test01.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test2", () => {
    const testCase = "test02.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test3", () => {
    const testCase = "test03.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test4", () => {
    const testCase = "test04.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test5", () => {
    const testCase = "test05.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test6", () => {
    const testCase = "test06.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test7", () => {
    const testCase = "test07.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test8", () => {
    const testCase = "test08.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test9", () => {
    const testCase = "test09.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test10", () => {
    const testCase = "test10.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test11", () => {
    const testCase = "test11.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test12", () => {
    const testCase = "test12.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test13", () => {
    const testCase = "test13.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test14", () => {
    const testCase = "test14.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test15", () => {
    const testCase = "test15.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})

describe(`${ruleId}-1xx`, () => {
  const invoke = createNewInvoker(ruleId, ruleFile, testBase)

  test("test101", () => {
    const testCase = "test101.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test102", () => {
    const testCase = "test102.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test103", () => {
    const testCase = "test103.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test104", () => {
    const testCase = "test104.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test105", () => {
    const testCase = "test105.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test106", () => {
    const testCase = "test106.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test107", () => {
    const testCase = "test107.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test108", () => {
    const testCase = "test108.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test109", () => {
    const testCase = "test109.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test110", () => {
    const testCase = "test110.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test111", () => {
    const testCase = "test111.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })

  test("test112", () => {
    const testCase = "test112.go"
    const results = invoke(testCase)

    expect(results.Missing).toEqual([])
    expect(results.Extra).toEqual([])
  })
})
