const mongoose = require('mongoose')



const HotelSchema = new mongoose.Schema({
     Username:{
       type:String,
       required:true
     },
     paid:{
      type:String,
      required:true
     }
})

const Hotelmodel = mongoose.model("Hotel",HotelSchema)
module.exports = Hotelmodel