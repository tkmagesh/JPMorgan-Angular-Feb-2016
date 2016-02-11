angular
    .module("myApp.products", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when('/products', {
                    //template : '<h2>Products</h2>'
                    templateUrl : 'myApp/products/templates/productsTemplate.html',
                    controller : 'productsController'
                })
                .when('/products/:pid',{
                    templateUrl : 'myApp/products/templates/productInfoTemplate.html',
                    controller : 'productInfoController'
                })
});
