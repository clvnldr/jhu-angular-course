(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var vm = this;
  vm.found = [];
  vm.getMatchedMenuItems = function(searchTerm) {
    MenuSearchService.getMatchedMenuItems(searchTerm);
  };
}

function MenuSearchService() {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    // http request and return result after looping through errything
    return $http().then(function (result) {
      var foundItems = [];



      return foundItems;
    });

  };

}

})();
