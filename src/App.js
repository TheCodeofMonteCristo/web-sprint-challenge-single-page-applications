import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './index.css';
import Navbar from './Comps/Navbar';
import Home from "./Comps/Home";
import Form from "./Comps/Form";
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from "axios";

const initialFromValues = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  special: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFromValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res.data)
        setFormValues(res.data);
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: (formValues.name && formValues.name.trim()) || '',
      size: (formValues.size && formValues.size.trim()) || '',
      sauce: (formValues.sauce && formValues.sauce.trim()) || '',
      topping: ['pepperoni', 'sausage', 'bacon', 'chicken'].filter(hob => formValues[hob]),
      special: formValues.special || ''
    }
    postNewOrder(newOrder)
  }

  return (
    <>
      <Routes>
        <Route path="/"  element={<><Navbar /> <Home /></>} />
        <Route path="/pizza" element={<><Navbar /> <Form values={formValues} change={inputChange} submit={formSubmit} errors={formErrors}/></>} />
      </Routes>
    </>
  );
};
export default App;





/*









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