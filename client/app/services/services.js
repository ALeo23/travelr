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
}]);