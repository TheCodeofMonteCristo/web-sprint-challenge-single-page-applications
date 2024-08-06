import React, { useState } from "react"
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { Pizza } from './Components/Pizza.js'
import Header from "./Components/Header"
import './App.css'



// const initialFormValues = {
//   name: '',
//   size: '',
//   topping1: false,
//   topping2: false,
//   topping3: false,
//   topping4: false,
//   special: '',
// }

const Menu = () => {
  return <div id="menu-container">
    <div><h2 id="menu-header">Menu</h2></div>
    <div><h3>Red Sauce Pizza with choice of toppings: </h3></div>
    <div><h4>Cheese</h4></div>
    <div><h4>Pepperoni</h4></div>
    <div><h4>Anchovies</h4></div>
    <div><h4>Mushrooms</h4></div>
  </div>
}

const App = () => {
  const [showHeader, setShowHeader] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()


  const handleLinkClick = () => {
    setShowHeader(false)
    navigate("/Pizza")
  }
 
  return (
   <div>
     {showHeader && <Header />}
     <div>
      <nav>
        {location.pathname !== "/" &&
        (<Link to="/" id="menu-link" onClick={()=> setShowHeader(true)}>Menu{" "} </Link>
        )}
      </nav>
     </div>
      <nav>
       {location.pathname !== "/pizza" &&
        (<Link to="/pizza" id="order-pizza" onClick={handleLinkClick}>Order Pizza</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Pizza" element={<Pizza />}/>
      </Routes>
    
   </div>
  )
};

export default App;







// Original Code Below. Finished Code Above. Changes as Implemented. 
/*



//[At the bottom of the page, inject an asterisk slash combination]

//[If there are any quoted out sections, then use // on every line that needs to be removed from usage]




*/

/*



import React from "react";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;


*/