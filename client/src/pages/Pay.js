import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function Pay() {
   
     const  Username = "Rajesh"
      const paid = 135000 
      
      async function handleToken(token){
        await axios.post('http://localhost:4000/checkout',{Username,paid}).then((res)=>{
          if(res.data.status==="success"){
            window.location.assign("/")
          }
          
        })}
    
  return (
    <div>
        <div className='container'>
    <br></br>
    <h1 className='text-center'>
      payment gateway
    </h1>
    <br></br>
    <div className='form-group conatiner'>
      
      <StripeCheckout
      stripeKey='pk_test_51MBb38SAkeZelpV3YYSwiLjzipQQwKK2hWwFWXcHosh5HaiFeLR1ZRPv1Nzbh5FuJxbTVYGz5697x3Gm4VnAKEmS00sZwrFUUN'
      token={handleToken} 
       />
      
    </div>
    </div>
</div>
  )
}
