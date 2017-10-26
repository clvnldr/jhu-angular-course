(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrowItDown',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var vm = this;

  vm.getMatchedMenuItems = function(searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      vm.found = response;
    })
    .catch(function (error) {
        console.log(error);
    });
  };

  vm.removeItem = function(itemIndex) {
    vm.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
      var foundItems = [];

      if (searchTerm === "") {
        return foundItems;
      } else {
        var menuItems = result.data.menu_items;

        menuItems.forEach(function (menuItem) {
          if (menuItem.description.includes(searchTerm)) {
            foundItems.push(menuItem);
          }
        });
        return foundItems;
      }
    });

  };

}

})();
