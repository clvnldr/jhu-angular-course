(function () {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath'];
function InfoController(MenuService, ApiPath) {
  var vm = this;

  vm.isSignedUp = false;
  vm.userDetails = MenuService.getUserDetails();
  vm.ApiPath = ApiPath

  if (angular.equals(vm.userDetails, {})) {
    vm.isSignedUp = false;
  } else {
    vm.isSignedUp = true;
  }

}

})();
