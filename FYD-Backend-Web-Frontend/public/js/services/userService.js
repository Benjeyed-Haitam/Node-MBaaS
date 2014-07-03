/****************************************
 * Created by BENJEYED Haitam on 19/05/14.
 *****************************************/

    // NO SERVICE's YET //
    angular.module('userService',[]).factory('user', function($http) {

        return {
             // CALL TO GET USER'S LIST
             get : function(users) {
             return $http.post('/api/getUsers',users);
            },

            // CALL TO DELETE A USER
            delete : function(id) {
                return $http.delete('/api/deleteUser/' + id);
            }
        }
    });