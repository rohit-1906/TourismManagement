"use strict";

var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  paid: {
    type: String,
    required: true
  }
});
var Hotelmodel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotelmodel;