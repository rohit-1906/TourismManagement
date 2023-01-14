"use strict";

var exp = require("express");

var Stripe = require("stripe");

var app = exp();

require("dotenv").config();

var stripe = Stripe(process.env.STRIPE_KEY);
var router = exp.Router();
app.post('/create-checkout-session', function _callee(req, res) {
  var session;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create({
            line_items: [{
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'T-shirt'
                },
                unit_amount: 2000
              },
              quantity: 1
            }],
            mode: 'payment',
            success_url: '${process.env.CLIENT_URL}/checkout-success',
            cancel_url: '${process.env.CLIENT_URL}/cart'
          }));

        case 2:
          session = _context.sent;
          res.send({
            url: session.url
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;