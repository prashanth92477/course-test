(function () {
  'use strict';
  angular.module('MsgApp', []).controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = 'Hello Expression I am checking on';

    $scope.sayMessage = function () {
      return 'I would like to eat the snacks in the eveing';
    };
  }
})();
