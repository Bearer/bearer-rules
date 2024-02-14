// Use bearer:expected java_third_parties_segment to flag expected findings
import com.segment.analytics.Analytics;
import com.segment.analytics.messages.TrackMessage;
import com.segment.analytics.messages.ImmutableMap;

public class Foo {
  private static String WRITE_KEY = "secret";

  public void bad(User user) {
    Analytics analytics = Analytics.builder(WRITE_KEY).build();

    Map<String, String> map = new HashMap();
    map.put("name", user.name);
    map.put("email", user.email);

    analytics.enqueue(IdentifyMessage.builder()
      .userId(user.uuid)
      .traits(map));
  }

  public void bad2(User user) {
    Analytics analytics = Analytics.builder(WRITE_KEY).build();

    analytics.enqueue(TrackMessage.builder("User Activity")
      .userId(user.uuid)
      .properties(ImmutableMap.builder()
        .put("name", user.name)
        .put("email", user.email)
        .build()
      )
    );
  }
}