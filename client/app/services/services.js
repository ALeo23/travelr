angular.module('travelr.services', [])

.factory('WeatherStats', function($http) {

  var getWeather = function() {
    return $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/e2dc2d6bfc0da812/forecast/q/CA/San_Francisco.json'
    })
    .then(function(resp) {
      return resp.forecast;
    });

  };
  return {
    getWeather: getWeather
  };
});