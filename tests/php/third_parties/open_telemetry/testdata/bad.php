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
# bearer:expected php_third_parties_open_telemetry
        $span->setAttribute("user.id", $user->email);
    },
    post: static function (DemoClass $demo, array $params, $returnValue, ?Throwable $exception) {
        $span = Span::fromContext($scope->context());
# bearer:expected php_third_parties_open_telemetry
        $span->setStatus(StatusCode::STATUS_ERROR, $user->email);
    }
);

$eventAttributes = Attributes::create([
    "id" => $user->email,
    "result" => 42,
]);

$root = $tracer->spanBuilder('HTTP ' . $request->getMethod())
    ->setParent($context)
    ->setSpanKind(SpanKind::KIND_SERVER)
    ->startSpan();
# bearer:expected php_third_parties_open_telemetry
$root->addEvent("Foo", $eventAttributes);

$tracer = $tracerProvider->getTracer('io.opentelemetry.contrib.php');
$span2 = $tracer
  ->spanBuilder('example')
  ->startSpan();
# bearer:expected php_third_parties_open_telemetry
$span2->setAttribute("user.id", $user->email);

$span3 = Span::getCurrent();
# bearer:expected php_third_parties_open_telemetry
$span3->setAttributes(["user.id" => $user->email]);
