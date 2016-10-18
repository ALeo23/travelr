var travelr = angular.module('travelr', []);
//travelr.currency
//travelr.services

// travelr.config(function($routeProvider) {
//   $routeProvider
//     .when('/currency', {
//       templateUrl: 'app/currency/currency.html',
//       controller: 'CurrencyCtrl'
//     });
// });

//Weather Factory

travelr.factory('WeatherStats', ['$http', '$q', function($http, $q) {

  function getWeather(query) {
    var deferred = $q.defer();
    var city = query.city;
    var state = query.state;
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%2C%20' + state + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
      .success(function(data) {
        deferred.resolve(data.query.results.channel);
      })
      .error(function(err) {
        console.log('Error retrieving data.');
        deferred.reject(err);
      });
      return deferred.promise;

  }
  return {
    getWeather: getWeather
  };
}]);

//Weather Controller

travelr.controller('WeatherCtrl', ['$scope', 'WeatherStats', function($scope, WeatherStats) {

  $scope.query = {
    city: 'tampa',
    state: 'fl'
  };
  function fetchWeather(query) {
    WeatherStats.getWeather(query).then(function(data) {
      $scope.place = data;
    });
  }

  fetchWeather($scope.query);

  $scope.findWeather = function(query) {
    $scope.place = '';
    fetchWeather(query);
  };

}]);

//Money factory (I need one of those)

travelr.factory('CurrencyStats', ['$http', '$q', function($http, $q) {

  function getRates() {
    var deferred = $q.defer();
    $http.get('http://api.fixer.io/latest')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err) {
        console.log('Error retrieving data.');
        deferred.reject(err);
      });
      return deferred.promise;
  }

  return {
    getRates: getRates
  };
}]);



//Money controller

travelr.controller('CurrencyCtrl', ['$scope', 'CurrencyStats', function($scope, CurrencyStats) {

  $scope.rates = {};
  $scope.base ='EUR';
  $scope.amount = 100;
  $scope.conversion = 0;
  $scope.rate = 1;
  function fetchRates() {
    CurrencyStats.getRates().then(function(data) {
      $scope.rates = data.rates;
      $scope.base = data.base;
    });
  }

  fetchRates();

  $scope.findRates = function() {
    $scope.rates = {};
    fetchRates();
  };

  $scope.findConversion = function() {
    $scope.conversion = +$scope.amount * +$scope.rate;
    console.log($scope.amount, $scope.rate);
  };

  $scope.setRate = function() {

  };
}]);








