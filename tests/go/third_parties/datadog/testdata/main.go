package main

import (
	"github.com/DataDog/datadog-go/v5/statsd"
	"gopkg.in/DataDog/dd-trace-go.v1/ddtrace/tracer"
)

func stats() {
	// bearer:expected go_third_parties_datadog
	client := statsd.New("statsd.local", statsd.WithTags([]string{user.email}))
	statsd.New("statsd.local", statsd.WithTags([]string{user.id}))

	// bearer:expected go_third_parties_datadog
	client.Count("test", 10, []string{user.email}, 0.8)
	client.Count("test", 10, []string{user.id}, 0.8)

	// bearer:expected go_third_parties_datadog
	event := statsd.NewEvent("hey", user.email)
	statsd.NewEvent("hey", user.id)

	// bearer:expected go_third_parties_datadog
	event.Tags = append(event.Tags, user.email)
	event.Tags = append(event.Tags, user.id)
}

func trace() {
	// bearer:expected go_third_parties_datadog
	tracer.Start(tracer.WithGlobalTag("user", user.email))
	tracer.Start(tracer.WithGlobalTag("user", user.id))

	// bearer:expected go_third_parties_datadog
	tracer.SetUser(span, user.email)
	tracer.SetUser(span, user.id)

	// bearer:expected go_third_parties_datadog
	tracer.SetUser(span, id, tracer.WithUserEmail(user.email))
	tracer.SetUser(span, id, tracer.WithUserEmail(user.id))

	// bearer:expected go_third_parties_datadog
	tracer.StartSpan(user.email, options)
	tracer.StartSpan(user.id, options)

	// bearer:expected go_third_parties_datadog
	tracer.StartSpan("ok", tracer.Tag("user", user.email))
	tracer.StartSpan("ok", tracer.Tag("user", user.id))

}
