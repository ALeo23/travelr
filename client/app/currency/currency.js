angular.module('travelr.currency', [])
.controller('CurrencyCtrl', ['$scope', 'CurrencyStats', function($scope, CurrencyStats) {

  $scope.query = {
    base: 'EUR'
  };
  $scope.amount = 100;
  function fetchConversion(query) {
    CurrencyStats.getRate(query).then(function(data) {
      $scope.rate = data;
    });
  }

  fetchConversion($scope.query);

  $scope.findConversion = function(query) {
    $scope.price = 0;
    fetchConversion(query);
  };
}]);