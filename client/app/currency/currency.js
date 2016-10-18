angular.module('travelr.currency', [])
.controller('CurrencyCtrl', ['$scope', 'CurrencyStats', function($scope, CurrencyStats) {

  $scope.rates = {};
  $scope.base ='USD';
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
    //set $scope.rate equal to the value of the selected option field

  };
}]);