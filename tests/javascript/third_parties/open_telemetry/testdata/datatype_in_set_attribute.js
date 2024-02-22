import * as opentelemetry from "@opentelemetry/sdk-node"

const tracer = opentelemetry.trace.getTracer("some-tracer");

tracer.startActiveSpan("some-span", span => {
// bearer:expected javascript_third_parties_open_telemetry
  span.setAttribute("current-user", currentUser.emailAddress);
  span.end();
});


// bearer:expected javascript_third_parties_open_telemetry
span.setAttribute("current-user", user.email);
