(function () {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService'];
function InfoController(MenuService) {
  var vm = this;
}

})();
