/**
 * AngularJS wrapper for Moment.js
 *
 * @author Hein Bekker <hein@netbek.co.za>
 * @copyright (c) 2015 Hein Bekker
 * @license http://www.gnu.org/licenses/agpl-3.0.txt AGPLv3
 */

(function (window, angular, undefined) {
	'use strict';

	angular
		.module('nb.moment', [])
		.factory('Moment', ['$window', function Moment ($window) {
				var Moment = $window.moment;
				delete $window.moment;
				return Moment;
			}])
		.run(runBlock);

	// Invoke at runtime to allow factory to delete global reference.
	runBlock.$inject = ['Moment'];
	function runBlock (Moment) {
	}
})(window, window.angular);