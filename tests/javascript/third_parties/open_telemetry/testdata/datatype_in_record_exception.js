import * as opentelemetry from "@opentelemetry/sdk-node"

var span = opentelemetry.trace.getSpan()

try {
  // something
} catch (err) {
  span.recordException(err)
// bearer:expected javascript_third_parties_open_telemetry
  span.recordException(currentUser.ipAddress)
}