"use strict";

var exp = require("express");

var app = exp();

var mongoose = require("mongoose");

var Usermodel = require("./models/User");

var Hotelmodel = require("./models/Hotel"); // const router  = require("./route/auth")


var cors = require('cors');

var bodyparser = require('body-parser'); // const Hotelmodel = require("./models/Hotel")


app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

var stripe = require('stripe')("sk_test_51MBb38SAkeZelpV3HpeUfiqz28lWLOdzybl4Uj0aOxCdF2rtVVoacFWZb7oni9JJk5NhhEobml3gUBC2ozi53Juc00w3CK39IW");

var uuid = require('uuid').v4;

app.use(exp.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mernstack").then(function () {
  console.log("mongoose is connected");
}); // app.use("/auth",router)

app.get("/getuser", function (req, res) {
  Usermodel.find({}, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/post", function _callee(req, res) {
  var user, newUser, e, e1;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = req.body;
          newUser = new Usermodel(user);
          _context.next = 4;
          return regeneratorRuntime.awrap(Usermodel.findOne({
            Email: user.Email
          }));

        case 4:
          e = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(Usermodel.findOne({
            Password: user.Password
          }));

        case 7:
          e1 = _context.sent;

          if (!e) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.json({
            status: "user already"
          }));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(newUser.save());

        case 14:
          res.json(user);

        case 15:
          if (!e1) {
            _context.next = 19;
            break;
          }

          return _context.abrupt("return", res.json({
            status: "Invalid"
          }));

        case 19:
          return _context.abrupt("return", res.json({
            status: "proceed"
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/checkout', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          hotel = new Hotelmodel(req.body);
          _context2.next = 3;
          return regeneratorRuntime.awrap(hotel.save());

        case 3:
          return _context2.abrupt("return", res.json({
            status: "success"
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get("/getlogin", function _callee3(req, res) {
  var user, e1;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = req.body; // const newUser = new Usermodel(user)
          // let e = await Usermodel.findOne({Email:user.Email})

          _context3.next = 3;
          return regeneratorRuntime.awrap(Usermodel.findOne({
            Password: user.Password
          }));

        case 3:
          e1 = _context3.sent;

          if (!e1) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.json({
            status: "valid"
          }));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.listen(4000, function (req, res) {
  console.log("server connected");
});