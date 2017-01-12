/* global
	global, document, demand, provide, queue, processor, settings, setTimeout, clearTimeout, storage,
	DEMAND_ID, EVENT_PRE_REQUEST, EVENT_POST_REQUEST, TRUE
	linkElement,
	regexMatchSourcemap, regexIsAbsoluteUri,
	functionResolveUrl,
	abstractHandler
*/

//=require constants.js
//=require shortcuts.js
//=require variables.js
//=require function/resolveUrl.js
//=require abstract/handler.js

var handlerModule = (function() {
	var target         = document.getElementsByTagName('head')[0],
		regexMatchType = /^(application|text)\/(x-)?javascript/;

	function HandlerModule() {}

	HandlerModule.prototype = {
		validate: function(type) {
			return regexMatchType.test(type);
		},
		onPreRequest: function(dependency) {
			var url = dependency.url;

			dependency.url = url.slice(-3) !== '.js' ? url + '.js' : url;
		},
		onPostRequest: function(dependency) {
			var match, replacement;

			while(match = regexMatchSourcemap.exec(dependency.source)) {
				if(regexIsAbsoluteUri.test(match[1])) {
					linkElement.href = dependency.url;

					replacement = linkElement.protocol + '//' + linkElement.host + match[1];
				} else {
					replacement = functionResolveUrl(dependency.url + '/../' + match[1]);
				}

				dependency.source = dependency.source.replace(match[0], '//# sourceMappingURL=' + replacement + '.map');
			}
		},
		process: function(dependency) {
			var script;

			if(dependency.source) {
				script       = document.createElement('script');
				script.async = TRUE;
				script.text  = dependency.source;

				script.setAttribute(DEMAND_ID + '-id', dependency.id);

				target.appendChild(script);
			}
		}
	};

	return new (HandlerModule.extends(abstractHandler));
}());