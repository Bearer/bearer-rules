package main

import (
	"context"
	"fmt"

	"cloud.google.com/go/bigquery"
)

func insertRows(projectID, datasetID, tableID string) error {
	ctx := context.Background()
	client, err := bigquery.NewClient(ctx, projectID)
	if err != nil {
		return fmt.Errorf("bigquery.NewClient: %w", err)
	}
	defer client.Close()

	inserter := client.Dataset(datasetID).Table(tableID).Inserter()

	// bearer:expected go_third_parties_bigquery
	if err := inserter.Put(ctx, []*Item{{User: user.email}}); err != nil {
		return err
	}
	if err := inserter.Put(ctx, []*Item{{User: user.id}}); err != nil {
		return err
	}

	return nil
}
