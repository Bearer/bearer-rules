package main

import (
	"bytes"
	"context"
	"encoding/json"
	"strings"

	"github.com/elastic/go-elasticsearch/v8"
	"github.com/elastic/go-elasticsearch/v8/esutil"
	"github.com/elastic/go-elasticsearch/v8/typedapi/core/update"
)

type Document struct {
	User string
}

func lowLevelAPI() {
	client, err := elasticsearch.NewClient(elasticsearch.Config{})

	badDocument, err := json.Marshal(Document{User: user.email})
	okDocument, err := json.Marshal(Document{User: user.id})

	// bearer:expected go_third_parties_elasticsearch
	client.Index("my_index", bytes.NewReader(badDocument))
	client.Index("my_index", bytes.NewReader(okDocument))

	// bearer:expected go_third_parties_elasticsearch
	client.Update("my_index", "id", bytes.NewReader(badDocument))
	client.Update("my_index", "id", bytes.NewReader(okDocument))

	// bearer:expected go_third_parties_elasticsearch
	client.Bulk(strings.NewReader(`{ "index" : { "_index" : "test", "_id" : "1" } }` + "\n" + string(badDocument)))
	client.Bulk(strings.NewReader(`{ "index" : { "_index" : "test", "_id" : "1" } }` + "\n" + string(okDocument)))

	indexer, err := esutil.NewBulkIndexer(esutil.BulkIndexerConfig{})
	indexer.Add(
		context.Background(),
		// bearer:expected go_third_parties_elasticsearch
		esutil.BulkIndexerItem{
			Action: "index",
			Body:   badDocument,
		})
	indexer.Add(
		context.Background(),
		esutil.BulkIndexerItem{
			Action: "index",
			Body:   okDocument,
		})
}

func typedAPI() {
	client, err := elasticsearch.NewTypedClient(elasticsearch.Config{})

	badDocument, err := json.Marshal(Document{User: user.email})
	okDocument, err := json.Marshal(Document{User: user.id})

	// bearer:expected go_third_parties_elasticsearch
	client.Index("my_index").Id("1").Request(badDocument).Do(context.TODO())
	client.Index("my_index").Id("1").Request(okDocument).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Index("my_index").Id("1").Document(badDocument).Do(context.TODO())
	client.Index("my_index").Id("1").Document(okDocument).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Update("my_index", "id").Request(&update.Request{Doc: badDocument}).Do(context.TODO())
	client.Update("my_index", "id").Request(&update.Request{Doc: okDocument}).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Update("my_index", "id").Doc(badDocument).Do(context.TODO())
	client.Update("my_index", "id").Doc(okDocument).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Bulk().Timeout(10).Request(badDocument).Do(context.TODO())
	client.Bulk().Timeout(10).Request(okDocument).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Bulk().Timeout(10).IndexOp(types.IndexOperation{}, badDocument).Do(context.TODO())
	client.Bulk().Timeout(10).IndexOp(types.IndexOperation{}, okDocument).Do(context.TODO())

	// bearer:expected go_third_parties_elasticsearch
	client.Bulk().Timeout(10).UpdateOp(types.UpdateOperation{}, badDocument, types.UpdateAction{}).Do(context.TODO())
	client.Bulk().Timeout(10).UpdateOp(types.UpdateOperation{}, okDocument, types.UpdateAction{}).Do(context.TODO())
}
