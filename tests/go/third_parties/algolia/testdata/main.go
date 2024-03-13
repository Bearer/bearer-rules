package main

import "github.com/algolia/algoliasearch-client-go/v3/algolia/search"

func main() {
	client := search.NewClient("YourApplicationID", "YourWriteAPIKey")
	index := client.InitIndex("my_index")

	// bearer:expected go_third_parties_algolia
	index.SaveObject(map[string]string{"user": user.email}, options)
	index.SaveObject(map[string]string{"user": user.id}, options)
	// bearer:expected go_third_parties_algolia
	index.SaveObjects([]map[string]string{{"user": user.email}}, options)
	index.SaveObjects([]map[string]string{{"user": user.id}}, options)
	// bearer:expected go_third_parties_algolia
	index.PartialUpdateObject(map[string]string{"user": user.email}, options)
	index.PartialUpdateObject(map[string]string{"user": user.id}, options)
	// bearer:expected go_third_parties_algolia
	index.PartialUpdateObjects([]map[string]string{{"user": user.email}}, options)
	index.PartialUpdateObjects([]map[string]string{{"user": user.id}}, options)
	// bearer:expected go_third_parties_algolia
	index.ReplaceAllObjects([]map[string]string{{"user": user.email}}, options)
	index.ReplaceAllObjects([]map[string]string{{"user": user.id}}, options)
	// bearer:expected go_third_parties_algolia
	index.Batch(
		[]search.BatchOperationIndexed{{
			IndexName: "index1",
			BatchOperation: search.BatchOperation{
				Action: search.AddObject,
				Body:   map[string]string{"user": user.email},
			},
		}},
		options,
	)
	index.Batch(
		[]search.BatchOperationIndexed{{
			IndexName: "index1",
			BatchOperation: search.BatchOperation{
				Action: search.AddObject,
				Body:   map[string]string{"user": user.id},
			},
		}},
		options,
	)
}
