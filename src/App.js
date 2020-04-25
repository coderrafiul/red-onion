import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './Components/Foods/Foods';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Login from './Components/Login/Login';
import { addToDatabaseCart } from './utilities/databaseManager';



function App() {

  const[cart, setCart]= useState([]);
  console.log("Ordered food",cart)

  const addToCart= (food)=>{
    
    const newCart= [...cart, food];
    setCart(newCart);
 
    addToDatabaseCart(food.id, 1);
  
  }

  return (

 
      <Router>
          <div className="App">
          <Header cart={cart}></Header>
            <Switch>
              <Route exact path="/">
              <Search></Search>
              <Foods></Foods>
              <Portfolio></Portfolio>
              <Footer></Footer>
              </Route>
              <Route path="/FoodDetails/:foodId">
                <FoodDetails addToCart={addToCart}></FoodDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
        </div>
      </Router>

  );
}

export default App;
