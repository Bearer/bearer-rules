<?php

use OpenTelemetry\API\Common\Instrumentation\CachedInstrumentation;
use OpenTelemetry\API\Trace\Span;
use OpenTelemetry\API\Trace\StatusCode;
use OpenTelemetry\Context\Context;

OpenTelemetry\Instrumentation\hook(
    class: DemoClass::class,
    function: 'run',
    pre: static function (DemoClass $demo, array $params, string $class, string $function, ?string $filename, ?int $lineno) {
        static $instrumentation;
        $instrumentation ??= new CachedInstrumentation('example');
        $span = $instrumentation->tracer()->spanBuilder('democlass-run')->startSpan();
        $span->setAttribute("user.id", $user->id);
    },
    post: static function (DemoClass $demo, array $params, $returnValue, ?Throwable $exception) {
        $span = Span::fromContext($scope->context());
        $span->setStatus(StatusCode::STATUS_ERROR, $user->id);
    }
);

$eventAttributes = Attributes::create([
    "id" => $user->id,
    "result" => 42,
]);

$root = $tracer->spanBuilder('HTTP ' . $request->getMethod())
    ->setParent($context)
    ->setSpanKind(SpanKind::KIND_SERVER)
    ->startSpan();
$root->addEvent("Foo", $eventAttributes);

$tracer = $tracerProvider->getTracer('io.opentelemetry.contrib.php');
$span2 = $tracer
  ->spanBuilder('example')
  ->startSpan();
$span2->setAttribute("user.id", $user->id);

$span3 = Span::getCurrent();
$span3->setAttributes(["user.id" => $user->id]);
