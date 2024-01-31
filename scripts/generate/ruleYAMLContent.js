export function ruleYAMLContent(ruleID, language) {
  return `imports:
  - <shared_rule1>
patterns:
  - pattern: |
      $<INIT>.$<METHOD>($<USER_INPUT>$<...>)
    filters:
      - variable: INIT
        detection: ${ruleID}_init
        scope: cursor
      - variable: METHOD
        values:
          - method1
          - method2
      - variable: USER_INPUT
        detection: shared_rule1
        scope: result
auxiliary:
  - id: ${ruleID}_init
    patterns:
      - pattern1
      - pattern: $<INIT>
        filters:
          - variable: INIT
            detection: ${ruleID}_instance
            scope: cursor
  - id: ${ruleID}_instance
    patterns:
      - pattern2
languages:
  - ${language}
metadata:
  description: ""
  remediation_message: |
    ## Description

    ## Remediations

    ✅

    ❌

    ## References

    - []()

    cwe_id:
    - CWE_ID
  id: ${ruleID}
  documentation_url: https://docs.bearer.com/reference/rules/${ruleID}
`;
}
