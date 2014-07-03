/*****************************************
 * Created by BENJEYED Haitam on 20/06/14.
 ****************************************/

    angular.module('adminService',[]).factory('admin', function($http) {

        return {
            // CALL TO GET ALL USER'S FEEDBACK
            get : function(feedbackData) {
                return $http.post('/api/getAllFeedback',feedbackData);
            },

            // CALL TO POST AND CREATE A NEW ADMIN
            create : function(adminData) {
                return $http.post('/api/newAdmin', adminData);
            },

            // CALL TO DELETE A USER
            delete : function(username) {
                return $http.delete('/api/deleteUser/' + username);
            }
            
        }

    });
