import datadog.trace.api.Trace;
import datadog.trace.api.DDTags;
import io.opentracing.Scope;
import io.opentracing.Span;
import io.opentracing.Tracer;
import io.opentracing.tag.Tags;
import io.opentracing.util.GlobalTracer;
import java.io.PrintWriter;
import java.io.StringWriter;

public class Foo {
  public static void bad(User user) {
    Tracer tracer = GlobalTracer.get();
    Span span = tracer.buildSpan("doSomeTagging").start();
    try (Scope scope = tracer.activateSpan(span)) {
      // bearer:expected java_third_parties_datadog
      span.setTag("some_user_tag", user.email);
    } catch (Exception e) {
      // ...
    } finally {
      span.finish();
    }
  }

  public static void bad2(User user) {
    Tracer tracer = GlobalTracer.get();
    // bearer:expected java_third_parties_datadog
    Span span = tracer.buildSpan("doSomeTagging").withTag(DDTags.RESOURCE_NAME, user.name);
    span.start();
    // ...
    span.finish();
  }

  public static void bad3(User user) {
    Tracer tracer = GlobalTracer.get();
    Span span = tracer.buildSpan("doSomeTagging");
    // bearer:expected java_third_parties_datadog
    span.withTag(DDTags.RESOURCE_NAME, user.name);
    span.start();
    // ...
    span.finish();
  }

  public static void bad2(User user) {
    // bearer:expected java_third_parties_datadog
    Span span = GlobalTracer.get().setUser("someUser", user.email);
  }

  public static void bad2(User user) {
    Span span = GlobalTracer.get().activeSpan();
    if (span != null) {
      // bearer:expected java_third_parties_datadog
      span.setTag("some_user_tag", user.email);
    }
  }

  // ok
  public static void good(User user) {
    Span span = GlobalTracer.get().setUser("someUser", user.uuid);
    span.start();
    span.setTag("some_user_tag", user.uuid);
    span.finish();
  }
}