import Nav from './components/Nav';
import {Route , Routes} from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register';
import React from 'react';
import Pay from './pages/Pay'
import Private from './components/Private';
import Tour1 from './components/Tours/india/Tour1';
import Aus from  "./components/Tours/Australia/Aus"
import Hotel from './components/Hotel';
import Contact from './pages/Contact';
import Navmain from './components/Navmain'
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <div>
      <Routes>
      <Route path = "/" element = {<><Nav /></>}></Route>
      <Route path = "/Register" element = {<Register />}></Route>
      <Route path = "/Login" element = { <Login /> }></Route>
      <Route path = "/Private" element = {<Private />}></Route>
      <Route path = "/Tour1"  element = {<Tour1 />} />
      <Route path = "/Aus"  element = {<Aus />} />
      <Route path = "/Hotel" element = {<Hotel />}></Route>
      <Route path = "/Pay" element = {<Pay />}></Route>
      <Route path = "/Contact" element = {<Contact />}/>
      <Route path = "/Dashboard" element = {<><Navmain /></>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
                   