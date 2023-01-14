const exp = require("express")
const Stripe = require("stripe")
const app = exp()
require("dotenv").config()

const stripe = Stripe(process.env.STRIPE_KEY)
const router = exp.Router()
 
 



app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: '${process.env.CLIENT_URL}/checkout-success',
      cancel_url: '${process.env.CLIENT_URL}/cart',
    });
  
    res.send({url: session.url});
  });

  module.exports = router