// Use bearer:expected javascript_third_parties_polyfill to flag expected findings
function loadScript(args) {
  var min = args.minify ? '.min' : '';
  var features = args. fills? "features=".concat(args.neededPolyfills.join(',')) : '';
  var flags = args.options? "&flags=".concat(args.options.join(',')) : '';
  var monitor = args.rum? '\&rum=1' : "'; // not set to rum=0 since it loads RUM scripts anyway

  var agent = args. agent ? "&ua=".concat(args.agent) : "';
  var fallback = args.agentFallback ? "&unknown=". concat(args.agentFallback) : "';
  var js = document.createElement('script');
  // bearer:expected javascript_third_parties_polyfill
  js. src = "https://cdn.polyfill.io/v2/polyfill".concat(min, "js?")
  js.async = true;
  document.body.appendChild(js);
}

function loadScript2(args) {
  var min = args.minify ? '.min' : '';
  var features = args. fills? "features=".concat(args.neededPolyfills.join(',')) : '';
  var flags = args.options? "&flags=".concat(args.options.join(',')) : '';
  var monitor = args.rum? '\&rum=1' : "'; // not set to rum=0 since it loads RUM scripts anyway

  var agent = args. agent ? "&ua=".concat(args.agent) : "';
  var fallback = args.agentFallback ? "&unknown=". concat(args.agentFallback) : "';
  var js = document.createElement('script');
  js. src = "https://foo.polyfill.io/v2/polyfill".concat(min, "js?")
  js.async = true;
  document.body.appendChild(js);
}