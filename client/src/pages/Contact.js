import React from 'react'
import Login from '../components/Login'
import './../components/Log.css'
import './Contact.css'
function Contact() {
  return (
    <>
    <div>
    <div className="container">
   <section id="content">
    <form action="https://formspree.io/f/moqbgpla" method='POST'>
      <h1>Register Here</h1>
      <div>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." /> 
      </div>
      <div>
      <input type="text" placeholder="Email"  id="email" />
      </div>
      <div>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

      </div>
      <div>
        <input type="submit" value="Log in" />
    </div>
    </form>
    </section>
    </div>
    </div>
    </>
  )
}

export default Contact