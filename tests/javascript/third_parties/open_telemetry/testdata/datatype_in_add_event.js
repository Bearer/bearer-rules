import * as opentelemetry from "@opentelemetry/sdk-node"

var currentSpan = opentelemetry.trace.getSpan()
// bearer:expected javascript_third_parties_open_telemetry
currentSpan.addEvent('my-event', {
  'event.metadata': customer.emailAddress
})
