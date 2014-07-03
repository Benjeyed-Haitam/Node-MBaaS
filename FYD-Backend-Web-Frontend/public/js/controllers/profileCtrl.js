/***********************************
 ** Created by BENJEYED on 6/20/2014.
 **********************************/

var profileApp = angular.module('profileCtrl',[]);

/************************************************* CONTROLLER ***************************************************************/
profileApp.controller('profileController', function($scope,$http,user,$cookieStore) {
    console.log('Profile Controller Charged !');          // Simple message to make sure the destinations controller is charged
    $scope.profile={};
    $scope.loggedUser={};
    $scope.loggedUser.username=$cookieStore.get('username');   // Get the Username.
    $scope.loggedUser.fullname=$cookieStore.get('fullname');   // Get the Fullname.
    $scope.loggedUser.email=$cookieStore.get('email');         // Get the Email.
    $scope.loggedUser.password=$cookieStore.get('password');   // Get the Password.
    $scope.loggedUser.id=$cookieStore.get('id');               // Get the id.

    $scope.reset = function () {
        $scope.modifyEmail=false;
        $scope.modifyPassword=false;
        $scope.modifyFullname=false;
    };

    $scope.updateProfile = function () {
        if($scope.profile.newFullname!=undefined) {
        $scope.loggedUser.fullname = $scope.profile.newFullname;
        $scope.modifyFullname = false;
        }
        if($scope.profile.newEmail!=undefined) {
            $scope.loggedUser.email = $scope.profile.newEmail;
            $scope.modifyFullname = false;
        }
        if($scope.profile.newPassword!=undefined) {
            $scope.loggedUser.password = $scope.profile.newPassword;
            $scope.modifyFullname = false;
        }
    }



});
