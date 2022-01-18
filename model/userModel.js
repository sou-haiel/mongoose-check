const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: Number,

    favoriteFoods: Array
})
const model = mongoose.model('user',userSchema)
module.exports = model