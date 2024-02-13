// Use bearer:expected java_third_parties_elasticsearch to flag expected findings

public class Foo {
  public void bad(User user) {
    // ...
    ElasticsearchClient esClient = new ElasticsearchClient(transport);
    // bearer:expected java_third_parties_elasticsearch
    Customer customer = new Customer("cust-1", user.email, user.name);

    esClient.indices().create(c -> c
        .index("customers")
    );
    IndexResponse response = esClient.index(i -> i
        .index("customers")
        .id(customer.getSku())
        .document(customer)
    );
  }

  public void bad2(User user) {
    // ...
    ElasticsearchClient esClient = new ElasticsearchClient(transport);
    // bearer:expected java_third_parties_elasticsearch
    User esUser = new User("usr-1", user.email, user.name);

    esClient.update(u -> u
            .index("users")
            .id("usr-1")
            .upsert(esUser),
        User.class
    );
  }

  public void bad3(User user) {
    // bearer:expected java_third_parties_elasticsearch
    Customer customer = new Customer("cust-1", user.email, user.name);

    IndexRequest.Builder<Customer> indexReqBuilder = new IndexRequest.Builder<>();
    indexReqBuilder.index("cust-1");
    indexReqBuilder.id(customer.getSku());
    indexReqBuilder.document(customer);

    IndexResponse response = esClient.index(indexReqBuilder.build());
  }

  public void good() {
    // ...
    ElasticsearchClient esClient = new ElasticsearchClient(transport);
    Product product = new Product("prod-1", "item", 256);

    esClient.update(u -> u
            .index("products")
            .id("prod-1")
            .upsert(product),
        Product.class
    );
  }

}