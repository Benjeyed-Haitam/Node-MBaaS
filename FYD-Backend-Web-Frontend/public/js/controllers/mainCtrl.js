/*************************************
** Created by BENJEYED on 22/05/14. **
**************************************/


angular.module('mainCtrl',['ngCookies']).controller('mainController', function($scope,$http,$location,$cookieStore) {
    console.log('main Controller Charged !');                    // Simple message to make sure the main controller is charged
    $scope.logged= $cookieStore.get('islogged');                // Boolean  : 'true' if the user is logged
    $scope.username=$cookieStore.get('username');              // A cookies that contain the username of the logged user
    $scope.admin=$cookieStore.get('admin');                   // Boolean, true if the user is an admin
    $scope.loginMessage='';                                  // Login message
    $scope.signupMessage='';                                // SignUp message
    $scope.user={};                                        // Form data that will be send to the Node API to login
    $scope.newUser={};                                    // Form data that will be send to the Node API to subscribe
    $scope.userData={};                                  // User's information sent by the Node API
    
    // PROCESS THE LOGIN FORM
    $scope.login = function() {
        if( $scope.logged=='false' || $scope.logged == undefined ) {
        $http.post('/signin', $scope.user)
            .success(function(data) {
                $scope.user = {}; // clear the form so another user can reuse it
                $scope.userData = data;

                if($scope.userData.success == true) {
                    $scope.username=data.user.local.username;
                    $cookieStore.put('username', $scope.username);
                    $cookieStore.put('fullname', data.user.local.fullname);
                    $cookieStore.put('email', data.user.local.email);
                    $cookieStore.put('password', data.user.local.password);
                    $cookieStore.put('id', data.user._id);
                    $cookieStore.put('admin', data.user.local.admin);
                    $cookieStore.put('islogged', 'true');
                    $scope.logged='true';
                    $scope.admin=$cookieStore.get('admin');
                    $location.path('destinations');
                    $scope.loginMessage='';
                }
                else
                    $scope.loginMessage='Error, Password or username incorrect';

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        }
        else
            $scope.loginMessage='You are already logged';
    };


    // PROCESS THE SIGNUP FORM
    $scope.signup = function() {
        if( $scope.logged=='false' || $scope.logged == undefined || $scope.admin=='true') {
            $http.post('/signup', $scope.newUser)
                .success(function (data) {
                    $scope.newUser = {}; // clear the form so our user is ready to enter another
                    $scope.userData = data;
                    if ($scope.userData.success == true) {
                        $scope.username=data.user.local.username;
                        $cookieStore.put('username', $scope.username);
                        $cookieStore.put('islogged', 'true');
                        $scope.logged = 'true';
                        $location.path('destinations');
                        $scope.signupMessage = '';
                    }
                    else
                        $scope.signupMessage = 'Sorry, this username already exist';
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
            else
                $scope.signupMessage = 'First logout to subscribe ! ';
    };

    // WHEN LOGOUT CLEAR THE INFORMATION
    $scope.logout = function() {
        $location.path('signin');
        $scope.userData={};
        $scope.newUser={};
        $scope.user={};
        $cookieStore.put('islogged', 'false');
        $cookieStore.put('admin', 'false');
        $cookieStore.put('username', '');
        $scope.username='';
        $scope.logged='false';
        $scope.admin='false';
        $scope.loginMessage='';
        $scope.signupMessage='';
        $location.path('signin');
    };

    $scope.refresh = function() {
        $scope.loginMessage='';
        $scope.signupMessage='';
    }

});