const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  
  test.concurrent("knex_sql_injection", async () => {
    const testCase = "knex_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("mysql2_sql_injection", async () => {
    const testCase = "mysql2_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("ok_no_sql_injection", async () => {
    const testCase = "ok_no_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("pg_sql_injection", async () => {
    const testCase = "pg_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("sequelize_sql_injection", async () => {
    const testCase = "sequelize_sql_injection.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("sql_injection_juice", async () => {
    const testCase = "sql_injection_juice.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
  test.concurrent("sql_injection_juice_safe", async () => {
    const testCase = "sql_injection_juice_safe.ts"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})