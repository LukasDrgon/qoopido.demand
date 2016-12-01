/* global global, document, settings */

/* constants */
	//=require constants.js
	/* global STRING_UNDEFINED */

/* shortcuts */
//=require shortcuts.js
/* global arrayPrototypeSlice */

/* functions */
//=require function/isTypeOf.js
/* global isTypeOf */

var log = (function() {
	function log(error) {
		/* eslint-disable no-console */
		if(!isTypeOf(console, STRING_UNDEFINED)) {
			console.error(error.toString());
		}
		/* eslint-enable no-console */
	}

	return log;
}());