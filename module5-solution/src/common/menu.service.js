(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.userDetails = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.saveUserDetails = function(userDetails) {
    service.userDetails = angular.copy(userDetails);
  }

  service.getUserDetails = function() {
    return service.userDetails;
  }

  service.getFavoriteDish = function(menuItemNumber) {
    return $http.get(ApiPath + '/menu_items/' + menuItemNumber + '.json');
  }

}



})();
