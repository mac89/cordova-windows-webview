var exec = require('cordova/exec');

module.exports = {
	navigate: function (url, httpMethod, headers) {
		exec(function () { }, function () { }, "WindowsWebview", "navigate", [url, httpMethod, headers]);
	}
};