/***********************************
 * Created by BENJEYED on 6/20/2014.
 **********************************/


// load mongoose since we need it to define a model ================================================================
var mongoose = require('mongoose');
/******************************************************************************************************************/


// create the model and expose it to our app =======================================================================
module.exports = mongoose.model('Feedback', {
    subject : String,
    email : String,
    type : String,
    username : String,
    description : String,
    status : String
});
/******************************************************************************************************************/
