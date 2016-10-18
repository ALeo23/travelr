var travelr = angular.module('travelr', [
  'travelr.services',
  'travelr.weather',
  'travelr.currency',
  'ngRoute'
]);

travelr.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/weather/weather.html',
      controller: 'WeatherCtrl'
    })
    .when('/currency', {
      templateUrl: 'app/currency/currency.html',
      controller: 'CurrencyCtrl'
    });

    $locationProvider.html5Mode(true);
});







