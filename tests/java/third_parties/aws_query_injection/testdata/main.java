// Use bearer:expected java_third_parties_aws_query_injection to flag expected findings

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.simpledb.AmazonSimpleDB;
import com.amazonaws.services.simpledb.AmazonSimpleDBClient;
import com.amazonaws.services.simpledb.model.SelectRequest;
import com.amazonaws.services.simpledb.model.SelectResult;

public class Foo {
  public void bad(HttpServletRequest req, HttpServletResponse res) {
    BasicAWSCredentials awsCredentials = new BasicAWSCredentials("test", "test");
    AmazonSimpleDB client = new AmazonSimpleDBClient(awsCredentials);
    SelectRequest query = new SelectRequest("select * from users where username = '" + req.getParameter("username") + "'");

    // bearer:expected java_third_parties_aws_query_injection
    List<Item> usersList = client.select(query).getItems();
  }

  public void bad2(HttpServletRequest req, HttpServletResponse res) {
    BasicAWSCredentials awsCredentials = new BasicAWSCredentials("test", "test");
    AmazonSimpleDB client = new AmazonSimpleDBClient(awsCredentials);
    SelectRequest query = new SelectRequest()
    query = query.withSelectExpression("select * from users where username = '" + req.getParameter("username") + "'");

    // bearer:expected java_third_parties_aws_query_injection
    List<Item> usersList = client.select(query).getItems();
  }

  public void bad3(HttpServletRequest req, HttpServletResponse res) {
    BasicAWSCredentials awsCredentials = new BasicAWSCredentials("test", "test");
    AmazonSimpleDB client = new AmazonSimpleDBClient(awsCredentials);
    SelectRequest query = new SelectRequest().withSelectExpression("select * from users where username = '" + req.getParameter("username") + "'");

    // bearer:expected java_third_parties_aws_query_injection
    List<Item> usersList = client.select(query).getItems();
  }

  public void good(String username) {
    BasicAWSCredentials awsCredentials = new BasicAWSCredentials("test", "test");
    AmazonSimpleDB client = new AmazonSimpleDBClient(awsCredentials);
    SelectRequest query = new SelectRequest("select * from users where username = 'mish'");

    // ok
    List<Item> usersList = client.select(query).getItems();
  }

  public void good2(String username) {
    BasicAWSCredentials awsCredentials = new BasicAWSCredentials("test", "test");
    AmazonSimpleDB client = new AmazonSimpleDBClient(awsCredentials);
    SelectRequest query = new SelectRequest("select * from users where username = '" + username + "'");

    // ok
    List<Item> usersList = client.select(query).getItems();
  }
}