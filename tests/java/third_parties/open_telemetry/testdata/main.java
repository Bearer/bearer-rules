// Use bearer:expected java_third_parties_open_telemetry to flag expected findings
package io.opentelemetry.example.tracing;

import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.baggage.Baggage;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.context.Context;
import io.opentelemetry.extension.incubator.trace.ExtendedTracer;

public class Foo {
  public bad(User user) {
    // ...
    // bearer:expected java_third_parties_open_telemetry
    Span.current().setAttribute("userId", user.email);
    // ...
  }

  public bad2(User user) {
    // ...
    Span span = Span.current();
    // bearer:expected java_third_parties_open_telemetry
    span.setAttribute("userId", user.email);
    // ...
  }

  public bad3(User user) {
    // ...
    Tracer tracer = openTelemetry.getTracer("io.opentelemetry.example.http.HttpClient");
    Span span = tracer.spanBuilder("/").setSpanKind(SpanKind.CLIENT).startSpan();
    try (Scope scope = span.makeCurrent()) {
      // bearer:expected java_third_parties_open_telemetry
      span.setAttribute("userId", user.email);
    }
    // ...
  }

  public good(User user) {
    // ...
    Tracer tracer = openTelemetry.getTracer("io.opentelemetry.example.http.HttpClient");
    Span span = tracer.spanBuilder("/").setSpanKind(SpanKind.CLIENT).startSpan();
    try (Scope scope = span.makeCurrent()) {
      span.setAttribute("userId", user.uuid);
    }
    // ...
  }
}