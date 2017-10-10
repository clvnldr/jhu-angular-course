(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var vm = this;
  vm.list = ShoppingListCheckOffService.toBuyItems;
  vm.addBoughtItem = function (item) {
    ShoppingListCheckOffService.addBoughtItem(item);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var vm = this;
  vm.list = ShoppingListCheckOffService.boughtItems;
}

function ShoppingListCheckOffService() {
  var service = this;

  // list of items to buy
  service.toBuyItems = [
    { name: "cookies", quantity: 10, pricePerItem: 2 },
    { name: "snickers", quantity: 11, pricePerItem: 2 },
    { name: "bananas", quantity: 15, pricePerItem: 1 },
    { name: "pizzas", quantity: 24, pricePerItem: 8 },
    { name: "bags of chips", quantity: 11, pricePerItem: 3 }
  ];

  // list of bought items
  service.boughtItems = [];

  service.addBoughtItem = function(item) {
    var itemIndex = service.toBuyItems.indexOf(item);
    service.boughtItems.push(item);
    service.toBuyItems.splice(itemIndex, 1);
  };

}

})();
