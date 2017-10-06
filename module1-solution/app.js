(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('LunchCheckController', function($scope) {

  $scope.lunchItems = "";
  $scope.message= "";
  $scope.messageStyle = {};

  $scope.checkLunchItems = function(lunchItems) {

    var validLunchItems = [];



    if (lunchItems === "") {
      $scope.messageStyle.color = "#CC0000";
      $scope.messageStyle.border = "1px solid #CC0000";
      $scope.message = "Please enter data first";
    } else {
      var lunchItemsArr = lunchItems.split(",");

      lunchItemsArr.forEach(function (lunchItem) {
        var trimmedString = lunchItem.trim();
        if (trimmedString.length >= 1) {
          validLunchItems.push(lunchItem);
        }
      });

      $scope.messageStyle.color = "#008800";
      $scope.messageStyle.border = "1px solid #008800";

      console.log(validLunchItems.length);

      if (validLunchItems.length === 0) {
        $scope.messageStyle.color = "#CC0000";
        $scope.messageStyle.border = "1px solid #CC0000";
        $scope.message = "Please enter data first";
      }
      else if (validLunchItems.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };

});

})();
