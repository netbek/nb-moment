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
		.factory('Moment', ['$window', function ($window) {
				return $window.moment;
			}]);
})(window, window.angular);