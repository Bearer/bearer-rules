import com.algolia.search.DefaultSearchClient;
import com.algolia.search.SearchClient;
import com.algolia.search.SearchIndex;
import com.algolia.search.models.indexing.Query;
import com.algolia.search.models.indexing.SearchResult;

public class Program {
   public static void bad(User user) {
      SearchClient client = DefaultSearchClient.create("YourApplicationID", "YourWriteAPIKey");
      SearchIndex<Contact> index = client.initIndex("test_index", Contact.class);
      // bearer:expected java_third_parties_algolia
      Contact contactObj = new Contact().setName(user.name).setEmail(user.email);

      SearchResult<Contact> results = index.saveObject(contactObj);
   }

   public static void bad2(User user) {
      SearchClient client = DefaultSearchClient.create("YourApplicationID", "YourWriteAPIKey");

      SearchIndex<Record> index = client.initIndex("test_index", Record.class);
      // bearer:expected java_third_parties_algolia
      Record record = new Record("test_user", user.email);
      index.saveObject(record);
   }

   public static void bad3(User currentUser) {
      SearchClient client = DefaultSearchClient.create("YourApplicationID", "YourWriteAPIKey");
      SearchIndex<Contact> index = client.initIndex("test_index", Contact.class);
      List contactList = Arrays.asList(
         new Contact()
            .setId(currentUser.uuid)
            // bearer:expected java_third_parties_algolia
            .setName(currentUser.name)
            .setEmail(currentUser.email)
      )

      SearchResult<Contact> results = index.saveObjectsAsync(contactList);
   }

   public static void good(User user) {
      SearchClient client = DefaultSearchClient.create("YourApplicationID", "YourWriteAPIKey");
      SearchIndex<Contact> index = client.initIndex("test_index", Contact.class);
      Contact contact = new Contact("test_user", user.uuid);
      index.saveObject(contact);
   }
}