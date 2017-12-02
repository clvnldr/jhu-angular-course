(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var vm = this;

  vm.user = {};
  vm.signUpSuccess = false;
  vm.menuNumError = false;

  vm.signUp = function (formData) {

    if (formData.$invalid) {
      return;
    }

    MenuService.getFavoriteDish(vm.user.favDishNum).then(function(response) {
      vm.user.favoriteDish = response.data;
      MenuService.saveUserDetails(vm.user);
      vm.signUpSuccess = true;
    }, function(err) {
      vm.menuNumError = true;
    });

  }

  vm.checkFavDishNum = function (favDishNum) {
    MenuService.getFavoriteDish(favDishNum).then(function(response) {
      vm.menuNumError = false;
    }, function(err) {
      vm.menuNumError = true;
    });
  }
}

})();
