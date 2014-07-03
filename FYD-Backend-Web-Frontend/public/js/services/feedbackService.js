/****************************************
 *** Created by BENJEYED on 6/20/2014 ***
 ****************************************/

angular.module('feedbackService',[]).factory('feedback', function($http) {

    return {
        // CALL TO GET ALL FEEDBACK
        get : function(feedbackData) {
            return $http.post('/api/getMyFeedback',feedbackData);
        },

        // CALL TO POST AND CREATE A NEW FEEDBACK
        create : function(feedbackData) {
            return $http.post('/api/newFeedback',feedbackData);
        },

        // CALL TO DELETE A FEEDBACK
        delete : function(id) {
            return $http.delete('/api/deleteFeedback/' + id);
        }

    }

});