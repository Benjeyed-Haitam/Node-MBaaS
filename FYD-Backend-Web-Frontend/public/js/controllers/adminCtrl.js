/**********************************
 * Created by BENJEYED on 6/20/2014.
 **********************************/

var feedbackApp = angular.module('adminCtrl',[]);

/************************************************* CONTROLLER ***************************************************************/
feedbackApp.controller('adminController', function($scope,$http,admin,user,feedback,$cookieStore) {
    console.log('Admin Controller Charged !');         // Simple message to make sure the destinations controller is charged
    $scope.option='none';                             // Boolean, 'none' if no option are selected yet
    $scope.feedback={};                              // Feedback list
    $scope.users={};                                // Users list


        // Form Validation ====================================================================================================

        $scope.SetPristine = function() {
            $scope.signupForm.$setPristine();
        };

        $scope.submitForm = function(isValid) {

             // check to make sure the form is completely valid
              if (isValid) {
                $scope.SetPristine();
             }
        };
        /*********************************************************************************************************************/

        // GET ================================================================================================================
        // Use the get service to get all feedbacks
        $scope.getFeedback = function() {
            admin.get()
                .success(function(data) {
                    $scope.feedback = data; // assign the list of feedback
                    $scope.option='manageFeedback'
                });
        };

        $scope.deleteFeedback = function(id) {
            feedback.delete(id)
                .success(function(data) {
                    $scope.feedback = data;
                });
         };
        /*********************************************************************************************************************/

        // GET ================================================================================================================
        // Use the get service to get all users
            user.get()
                .success(function(data) {
                    $scope.users = data; // assign the list of users
                });

        /*********************************************************************************************************************/

        // DELETE =============================================================================================================
        // Delete a user after selecting it
        // Use the service to delete User
        $scope.deleteUser = function(id) {
            user.delete(id)
                .success(function(data) {
                    $scope.users = data;
                });
        };

});
