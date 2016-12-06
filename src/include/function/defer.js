/* global
	global, document, demand, provide, queue, processor, settings,
	NULL, TRUE, FALSE,
	setTimeout,
	singletonUuid
*/

/**
 * defer
 *
 * delay function execution like setImmediate does
 *
 * @param {function} function
 */
var functionDefer = (function() {
	var hasSetImmediate = 'setImmediate' in global,
		element, fallback;

	if('MutationObserver' in global) {
		return function defer(fn) {
			element = document.createElement('div');

			new MutationObserver(function() { fn(); })
				.observe(element, { attributes: TRUE });

			element.setAttribute('i', '1');
		};
	}

	if(!hasSetImmediate && 'postMessage' in global && !('importScripts' in global) && 'addEventListener' in global) {
		return (function() {
			var storage = {};

			function onMessage(event) {
				if(event.source === global && event.data && storage[event.data]) {
					storage[event.data]();

					delete storage[event.data];
				}
			}

			global.addEventListener('message', onMessage, FALSE);

			return function defer(fn) {
				var uuid = singletonUuid.generate();

				storage[uuid] = fn;

				global.postMessage(uuid, '*');
			}
		}());
	}

	if(!hasSetImmediate && 'onreadystatechange' in (element = document.createElement('script'))) {
		return function defer(fn) {
			element.onreadystatechange = function onreadystatechange() {
				element.onreadystatechange = NULL;
				element.parentNode.removeChild(element);

				fn();
			};

			document.body.appendChild(element);
		};
	}

	/* eslint-disable no-undef */
	fallback = hasSetImmediate ? setImmediate : setTimeout;
	/* eslint-enable no-undef */

	return function defer(fn) {
		fallback(fn);
	}
}());