var app = angular.module('publicInterfaceApp', [
    'ngRoute',
    'controllers',
    'services',
    'btford.socket-io'
]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html',
            controller: 'IndexController'
        }).otherwise({
                redirectTo: '/'
            });
    }]).config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);