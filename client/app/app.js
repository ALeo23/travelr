var travelr = angular.module('travelr', []);

travelr.factory('WeatherStats', ['$http', '$q', function($http, $q) {

  function getWeather(zipCode) {
    var deferred = $q.defer();
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
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

travelr.controller('WeatherCtrl', ['$scope', 'WeatherStats', function($scope, WeatherStats) {
  function fetchWeather(zipCode) {
    WeatherStats.getWeather(zipCode).then(function(data) {
      $scope.place = data;
    });
  }

  fetchWeather('94101');

  $scope.findWeather = function(zipCode) {
    $scope.place = '';
    fetchWeather(zipCode);
  };

}]);