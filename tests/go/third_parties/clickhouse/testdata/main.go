package main

import (
	"fmt"

	"github.com/ClickHouse/clickhouse-go/v2"
	"github.com/ClickHouse/clickhouse-go/v2/lib/driver"
)

func main() {
	conn := clickhouse.Open(&clickhouse.Options{})
	batch, err := conn.PrepareBatch(ctx, "INSERT INTO example")

	// bearer:expected go_third_parties_clickhouse
	batch.Append("user", user.email)
	batch.Append("user", user.id)

	// bearer:expected go_third_parties_clickhouse
	batch.AppendStruct(&row{
		Col1: "abc",
		Col2: user.email,
	})
	batch.AppendStruct(&row{
		Col1: "abc",
		Col2: user.id,
	})

}

func other(c *driver.Conn) {
	// bearer:expected go_third_parties_clickhouse
	c.AsyncInsert(ctx, fmt.Sprintf(`INSERT INTO example VALUES ('%s')`, user.email), false)
	c.AsyncInsert(ctx, fmt.Sprintf(`INSERT INTO example VALUES ('%s')`, user.id), false)
}

func other2(b *driver.Batch) {
	// bearer:expected go_third_parties_clickhouse
	b.Column(0).Append(user.email)
	b.Column(0).Append(user.id)
}
