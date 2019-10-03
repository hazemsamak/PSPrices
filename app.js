// MODULE
var weatherApp = angular.module('PSPrices', ['ngRoute', 'ngResource']);

weatherApp.config(['$locationProvider','$compileProvider', function($locationProvider,$compileProvider) {
  $locationProvider.hashPrefix('');
$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|magnet):/);
}]);
