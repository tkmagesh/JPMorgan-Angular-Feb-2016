angular
    .module("myApp.customers", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when('/customers', {
                    //template : '<h2>Customers</h2>'
                    templateUrl : 'myApp/customers/templates/customersTemplate.html'
                })
    });
