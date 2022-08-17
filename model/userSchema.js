const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fname:{ type: String, required:true},
    lname:{ type: String, required:true},
    email:{type:String, required:true},
    phone:{ type: String, required:true},
    add:{ type: String, required:true},
    bdate:{ type: String, required:true},
    gender:{ type: String, required:true},
    occup:{ type: String, required:true},
    pass:{type:String, required:true},
    cpass:{type:String, required:true}
},
{collection: 'userDetails'})

const model = mongoose.model('userDetails', User)

module.exports = model 
