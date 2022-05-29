// (function () {
//   'use strict';
//   angular
//     .module('DIApp', [])
//     // below code is for the adding dependency so that minified version of the code will work
//     // .controller('DIController', ['$scope', '$filter', DIController]);
//     .controller('DIController', DIController);
//   DIController.$inject = ['$scope', '$filter'];

//   function DIController($scope, $filter, $injector) {
//     $scope.name = 'Hello';
//     $scope.upper = function () {
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
//     // console.log($injector.annotate(DIController));
//   }
//   function empty(check, name, here) {
//     return 'hello';
//   }
//   // console.log(empty);
//   // console.log(DIController.toString());
// })();

// One scenario for the using minified code information for the below
// !(function () {
//   'use strict';
//   angular.module('DIApp', []).controller('DIController', [
//     '$scope',
//     '$filter',
//     function (e, n, o) {
//       (e.name = 'Hello'),
//         (e.upper = function () {
//           var o = n('uppercase');
//           e.name = o(e.name);
//         });
//     },
//   ]);
// })();

// ************* second minified version
!(function () {
  'use strict';
  function e(e, n, o) {
    (e.name = 'Hello'),
      (e.upper = function () {
        var o = n('uppercase');
        e.name = o(e.name);
      });
  }
  angular.module('DIApp', []).controller('DIController', e),
    (e.$inject = ['$scope', '$filter']);
})();
