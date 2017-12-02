describe('SignUpController', function() {
  'use strict';

  var MenuService;
  var $httpBackend;
  var ApiPath;
  var SignUpController;

  var menuItem = {
    "id":1,
    "short_name":"A1",
    "name":"Won Ton Soup with Chicken",
    "description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
    "price_small":2.55,
    "price_large":5.0,
    "small_portion_name":"pint",
    "large_portion_name":"quart",
    "created_at":"2017-12-02T15:39:44.446Z",
    "updated_at":"2017-12-02T15:39:44.446Z",
    "category_short_name":"A",
    "image_present":true
  }

  beforeEach(function() {
    module('restaurant');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');

      var $controller = $injector.get('$controller');
      var MenuService = $injector.get('MenuService');
      SignUpController = $controller('SignUpController', {
              MenuService: MenuService
      });

      $httpBackend.whenGET('src/public/public.html').respond('');
      $httpBackend.whenGET('src/public/home/home.html').respond('');
    });
  });

  it('should show error message if the menu item number does not exist', function() {

    var shortName = "A1";
    SignUpController.user.favDishNum = shortName;

    $httpBackend.expectGET(ApiPath + "/menu_items/" + shortName + ".json").respond(menuItem);

    SignUpController.checkFavDishNum(shortName);

    $httpBackend.flush();

    expect(SignUpController.menuNumError).toBe(false);
  });


});
