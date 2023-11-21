<?php

use DDTrace\SpanData;

\DDTrace\trace_function(
    'myFunc',
    function(SpanData $span, $args, $retval) {
        $span->name = $user->email;
        $span->meta['something'] = $user->email;
    }
);

\DDTrace\trace_function('foo', [
    'prehook' => function ($span, $args) {
        $span->meta['something'] = $user->email;
    }
]);

function foo (\DDTrace\SpanData $span) {
    $span->meta['something'] = $user->email;
}

\DDTrace\trace_method(
    'myClass',
    'myMeth',
    function(SpanData $span, $args, $retval) {
        $span->name = $user->email;
        $span->meta['something'] = $user->email;
    }
);


\DDTrace\active_span()->meta['something'] = $user->email;

$scope = \DDTrace\GlobalTracer::get()->startActiveSpan('foo');
$scope->getSpan()->setTag('something', $user->email);
\DDTrace\GlobalTracer::get()->getActiveSpan()->setTag('something', $user->email);

\DDTrace\add_global_tag('something', $user->email);
