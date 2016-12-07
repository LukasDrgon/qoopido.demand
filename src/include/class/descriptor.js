/* global
	global, document, demand, provide, queue, processor, settings,
	NULL
*/

function ClassDescriptor(value, writable, configurable, enumerable) {
	return {
		__proto__:    NULL,
		value:        value,
		enumerable:   !!enumerable,
		configurable: !!configurable,
		writable:     !!writable
	};
}