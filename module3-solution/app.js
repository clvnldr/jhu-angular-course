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
    vm.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    console.log(vm.found);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    // http request and return result after looping through errything
    return $http({
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
      var foundItems = [];
      var menuItems = result.data.menu_items;

      menuItems.forEach(function (menuItem) {
        if (menuItem.description.includes(searchTerm)) {
          foundItems.push(menuItem);
        }
      });

      return foundItems;
    });

  };

}

})();
