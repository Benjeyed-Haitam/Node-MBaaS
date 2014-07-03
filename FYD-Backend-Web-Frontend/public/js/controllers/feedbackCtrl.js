/***************************************
 ** Created by BENJEYED on 6/20/2014. **
 ***************************************/

var feedbackApp = angular.module('feedbackCtrl',[]);

/************************************************* CONTROLLER ***************************************************************/
feedbackApp.controller('feedbackController', function($scope,$http,feedback,$cookieStore) {

    console.log('Feedback Controller Charged !');             // Simple message to make sure the destinations controller is charged
    $scope.userInfo={};                                      // User information
    $scope.userInfo.username=$cookieStore.get('username');  // Cookie that contain the username of the logged user
    $scope.feedback = {};                                  // Form Data that will be send to the node api to create a new feedback
    $scope.fbOption = 'none';                             // boolean, true if the feedback added with success
    $scope.myFeedback = {};                              // Feedback List of the logged user

    // Form Validation ====================================================================================================

    $scope.SetPristine = function () {
        $scope.feedbackForm.$setPristine();
    };

    $scope.submitForm = function (isValid) {

        // Check to make sure the form is completely valid
        if (isValid) {
            console.log('Valid form !');
            $scope.SetPristine();
        }
    };

    $scope.createFeedback  = function () {
        feedback.create($scope.feedback)
            .success(function(data) {
                $scope.fbOption='New-FB';
            });
    };

    $scope.getFeedback  = function () {
        feedback.get($scope.userInfo)
            .success(function(data) {
                $scope.fbOption='List-FB';
                $scope.myFeedback = data;
            });
    };

});
