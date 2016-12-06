/* global
	global, document, demand, provide, queue, processor, settings,
	UNDEFINED,
	validatorIsObject, functionIterate
*/

/**
 * merge
 *
 * Merge two or more objects into the first one passed in
 *
 * @param {...object} object
 *
 * @return {object}
 */
var functionMerge = (function() {
	function mergeProperties(property, value) {
		var targetProperty = this[property],
			targetPropertyIsObject;

		if(value !== UNDEFINED) {
			if(validatorIsObject(value)) {
				targetPropertyIsObject = validatorIsObject(targetProperty);

				if(value.length !== UNDEFINED) {
					targetProperty = (targetPropertyIsObject && targetProperty.length !== UNDEFINED) ? targetProperty : [];
				} else {
					targetProperty = (targetPropertyIsObject && targetProperty.length === UNDEFINED) ? targetProperty : {};
				}

				this[property] = merge(targetProperty, value);
			} else {
				this[property] = value;
			}
		}
	}

	function merge() {
		var target = arguments[0],
			i = 1, properties;

		for(; (properties = arguments[i]) !== UNDEFINED; i++) {
			functionIterate(properties, mergeProperties, target);
		}

		return target;
	}

	return merge;
}());