// Use bearer:expected java_third_parties_bigquery to flag expected findings
import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.InsertAllRequest;
import com.google.cloud.bigquery.InsertAllResponse;
import com.google.cloud.bigquery.TableId;
import com.google.cloud.bigquery.InsertAllRequest.RowToInsert;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FooBar {
  public static void bad(User user) {
    BigQuery bigquery = BigQueryOptions.getDefaultInstance().getService();

    TableId tableId = TableId.of("MY_DATASET_NAME", "MY_TABLE_NAME");

    Map<String, String> rowContent = new HashMap<>();
    rowContent.put("name", user.name);
    rowContent.put("location", user.location);
    rowContent.put("email", user.email);

    InsertAllResponse response = bigquery
      // bearer:expected java_third_parties_bigquery
      .insertAll(InsertAllRequest.newBuilder(tableId)
        .addRow(rowContent)
        .build()
      );
  }
}