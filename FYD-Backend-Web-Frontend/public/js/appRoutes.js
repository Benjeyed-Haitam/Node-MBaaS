/******************************************
 * Created by BENJEYED Haitam  on 19/05/14.
 *****************************************/

    angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

        $routeProvider

            // HOME PAGE
            .when('/', {
                templateUrl : 'views/home.html'
            })

            // LOGIN PAGE
            .when('/signin', {
                templateUrl : 'views/signin.html',
                controller : 'signinController'
            })

            // SIGNUP PAGE
            .when('/signup', {
                templateUrl : 'views/signup.html',
                controller : 'signupController'
            })

            // PROFIL PAGE
            .when('/profile', {
                templateUrl : 'views/profile.html',
                controller : 'profileController'
            })

            // FEED-BACK PAGE
            .when('/feedback', {
                templateUrl : 'views/feedBack.html',
                controller : 'feedbackController'
            })

            // ADMIN PAGE
            .when('/admin', {
                templateUrl : 'views/admin.html',
                controller : 'adminController'
            })

            // DESTINATIONS PAGE
            .when('/destinations', {
                templateUrl : 'views/destinations.html',
                controller : 'destinationsController'
            });

        $locationProvider.html5Mode(true);
    }]);