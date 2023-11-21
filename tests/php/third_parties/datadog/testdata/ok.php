<?php

use DDTrace\SpanData;

\DDTrace\trace_function(
    'myFunc',
    function(SpanData $span, $args, $retval) {
        $span->name = $user->id;
        $span->meta['something'] = $user->id;
    }
);

function foo (\DDTrace\SpanData $span) {
    $span->meta['something'] = $user->id;
}

\DDTrace\trace_function('foo', [
    'prehook' => function (\DDTrace\SpanData $span, array $args) {
        $span->meta['something'] = $user->id;
    }
]);

\DDTrace\trace_method(
    'myClass',
    'myMeth',
    function(SpanData $span, $args, $retval) {
        $span->name = $user->id;
        $span->meta['something'] = $user->id;
    }
);


\DDTrace\active_span()->meta['something'] = $user->id;

$scope = \DDTrace\GlobalTracer::get()->startActiveSpan('foo');
$scope->getSpan()->setTag('something', $user->id);
\DDTrace\GlobalTracer::get()->getActiveSpan()->setTag('something', $user->id);

\DDTrace\add_global_tag('something', $user->id);
