// Format string without proper quoting
package main

func (s PostgreSQLBackend) bad(prefix string) {
	ctx := ""
	list_query := "SOME SQL WITH VAR ?"
	// bearer:expected go_gosec_sql_concat_sqli
	rows, err := s.client.QueryContext(ctx, list_query, "/"+prefix)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
}
