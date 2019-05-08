/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"abap/ABAP-Project/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});