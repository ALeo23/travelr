angular.module('travelr.weather', [])
.controller('WeatherCtrl', ['$scope', 'WeatherStats', function($scope, WeatherStats) {

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