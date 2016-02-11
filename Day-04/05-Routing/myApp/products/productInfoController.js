angular
    .module("myApp.products")
    .controller('productInfoController', function($scope, $routeParams, productService){
            var productId = parseInt($routeParams.pid,10);
            $scope.product = productService.getById(productId);
        });
