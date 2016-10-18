angular.module('travelr.services', [])
.factory('CurrencyStats', ['$http', '$q', function($http, $q) {

  function getRate(query) {
    var deferred = $q.defer();
    var base = query.base;
    $http.get('http://api.fixer.io/latest?base=' + base)
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
    getRate: getRate
  };
}])
.factory('WeatherStats', ['$http', '$q', function($http, $q) {

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