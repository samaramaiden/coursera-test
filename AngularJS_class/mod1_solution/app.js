(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";

  $scope.checkLunch = function () {
    var lunchList = $scope.lunch.split(/\s*,\s*/);
    var count = 0;
    for (var i = 0; i < lunchList.length; i++) {
      if ( lunchList[i].length > 0) {
        count++;
      }
    }
    if (count == 0) {
      $scope.message = "Please enter data first";
    }
    else if (count < 4) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
  };
};
})();