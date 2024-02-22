<?php

use DDTrace\SpanData;

\DDTrace\trace_function(
    'myFunc',
    function(SpanData $span, $args, $retval) {
# bearer:expected php_third_parties_datadog
        $span->name = $user->email;
# bearer:expected php_third_parties_datadog
        $span->meta['something'] = $user->email;
    }
);

\DDTrace\trace_function('foo', [
    'prehook' => function ($span, $args) {
# bearer:expected php_third_parties_datadog
        $span->meta['something'] = $user->email;
    }
]);

function foo (\DDTrace\SpanData $span) {
# bearer:expected php_third_parties_datadog
    $span->meta['something'] = $user->email;
}

\DDTrace\trace_method(
    'myClass',
    'myMeth',
    function(SpanData $span, $args, $retval) {
# bearer:expected php_third_parties_datadog
        $span->name = $user->email;
# bearer:expected php_third_parties_datadog
        $span->meta['something'] = $user->email;
    }
);


# bearer:expected php_third_parties_datadog
\DDTrace\active_span()->meta['something'] = $user->email;

$scope = \DDTrace\GlobalTracer::get()->startActiveSpan('foo');
# bearer:expected php_third_parties_datadog
$scope->getSpan()->setTag('something', $user->email);
# bearer:expected php_third_parties_datadog
\DDTrace\GlobalTracer::get()->getActiveSpan()->setTag('something', $user->email);

# bearer:expected php_third_parties_datadog
\DDTrace\add_global_tag('something', $user->email);
