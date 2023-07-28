const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test("knex_sql_injection", ({ expect }) => {
    const testCase = "knex_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("mysql2_sql_injection", ({ expect }) => {
    const testCase = "mysql2_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("ok_no_sql_injection", ({ expect }) => {
    const testCase = "ok_no_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("pg_sql_injection", ({ expect }) => {
    const testCase = "pg_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sequelize_sql_injection", ({ expect }) => {
    const testCase = "sequelize_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sql_injection_juice", ({ expect }) => {
    const testCase = "sql_injection_juice.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test("sql_injection_juice_safe", ({ expect }) => {
    const testCase = "sql_injection_juice_safe.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})