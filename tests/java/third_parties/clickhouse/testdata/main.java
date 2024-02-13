import java.sql.Connection;
import java.sql.PreparedStatement;

import com.clickhouse.client.ClickHouseClient;
import com.clickhouse.client.ClickHouseConfig;
import com.clickhouse.client.ClickHouseNode;
import com.clickhouse.client.ClickHouseProtocol;
import com.clickhouse.client.ClickHouseRequest;
import com.clickhouse.client.ClickHouseResponse;
import com.clickhouse.data.ClickHouseDataStreamFactory;
import com.clickhouse.data.ClickHouseFormat;
import com.clickhouse.data.ClickHousePipedOutputStream;
import com.clickhouse.data.format.BinaryStreamUtils;
import com.clickhouse.jdbc.ClickHouseDataSource;

public class Foo {
  public static void bad(User user) {
    ClickHouseNodes servers = ClickHouseNodes.of("jdbc:ch:http://server1.domain");

    try (ClickHouseClient client = ClickHouseClient.newInstance(ClickHouseProtocol.HTTP)) {
      ClickHouseRequest.Mutation request = client.read(servers).write().format(ClickHouseFormat.RowBinary)
      ClickHouseConfig config = request.getConfig();

      try (ClickHousePipedOutputStream stream = ClickHouseDataStreamFactory
        .getInstance()
        .createPipedOutputStream(config, (Runnable) null)) {
        future = request.data(stream.getInputStream()).execute();

        for (int i = 0; i < 10_000; i++) {
          // bearer:expected java_third_parties_clickhouse
          BinaryStreamUtils.writeString(stream, user.email);
          BinaryStreamUtils.writeNonNull(stream);
        }
      }
      // ...
    }
  }

  // clickhouse-jdbc example
  public void bad2(User user) {
    String url = "jdbc:ch://my-server/system";
    Properties properties = new Properties();

    ClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);
    try (Connection conn = dataSource.getConnection("default", "password");
      Statement stmt = conn.createStatement()) {
        try (PreparedStatement ps = conn.prepareStatement(
          "insert into mytable select col1 from input('col1 String')")) {
            // bearer:expected java_third_parties_clickhouse
            ps.setString(1, user.email);
            ps.addBatch();
            // ...
            ps.executeBatch();
        }
    }
  }

  public void ok(User user) {
    ClickHouseNodes servers = ClickHouseNodes.of("jdbc:ch:http://server1.domain");

    try (ClickHouseClient client = ClickHouseClient.newInstance(ClickHouseProtocol.HTTP)) {
      ClickHouseRequest.Mutation request = client.read(servers).write().format(ClickHouseFormat.RowBinary)
      ClickHouseConfig config = request.getConfig();

      try (ClickHousePipedOutputStream stream = ClickHouseDataStreamFactory
        .getInstance()
        .createPipedOutputStream(config, (Runnable) null)) {
        future = request.data(stream.getInputStream()).execute();

        for (int i = 0; i < 10_000; i++) {
          // ok
          BinaryStreamUtils.writeString(stream, user.uuid);
        }
      }
      // ...
    }
  }

  public void ok2(User user) {
    String url = "jdbc:ch://my-server/system";
    Properties properties = new Properties();

    ClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);
    try (Connection conn = dataSource.getConnection("default", "password");
      Statement stmt = conn.createStatement()) {
        try (PreparedStatement ps = conn.prepareStatement(
          "insert into mytable select col1 from input('col1 String')")) {
            // ok
            ps.setString(1, user.uuid);
            ps.addBatch();
            // ...
            ps.executeBatch();
        }
    }
  }
  }
}