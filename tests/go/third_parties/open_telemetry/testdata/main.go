package main

import (
	"context"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
)

func main() {
	tracer := otel.GetTracerProvider().Tracer("example.com/foo")
	// bearer:expected go_third_parties_open_telemetry
	ctx, span := tracer.Start(context.TODO(), user.email)
	ctx, span = tracer.Start(context.TODO(), user.id)

	// bearer:expected go_third_parties_open_telemetry
	span.SetName(user.email)
	span.SetName(user.id)

	// bearer:expected go_third_parties_open_telemetry
	attr := attribute.KeyValue{Key: "foo", Value: user.email}
	attr = attribute.KeyValue{Key: "foo", Value: user.id}

	// bearer:expected go_third_parties_open_telemetry
	span.SetAttributes([]attribute.KeyValue{{Key: "foo", Value: user.email}}...)
	span.SetAttributes([]attribute.KeyValue{{Key: "foo", Value: user.id}}...)

	tracer2 := otel.Tracer("foo")
	ctx2, span2 := tracer2.Start(context.TODO(), "my-span")

	// bearer:expected go_third_parties_open_telemetry
	span2.AddEvent(user.email)
	span2.AddEvent(user.id)
}
