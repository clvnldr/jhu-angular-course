(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('LunchCheckController', function($scope) {

  $scope.lunchItems = "";
  $scope.message= "";

  $scope.checkLunchItems = function(lunchItems) {
    if (lunchItems === "") {
      $scope.message = "Please enter data first";
    } else {
      var numLunchItems = lunchItems.split(",").length;

      if (numLunchItems <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
      
    }
  };

});

})();
