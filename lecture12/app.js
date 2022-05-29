(function () {
  angular.module('BtnApp', []).controller('BtnController', BtnController);

  BtnController.$inject = ['$scope'];
  function BtnController($scope) {
    $scope.name = ' Testing';
    $scope.btnclick = 'hungry';
    $scope.feed = function () {
      return ($scope.btnclick = 'not');
    };
  }
})();
