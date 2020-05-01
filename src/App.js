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
} from "react-router-dom";
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Login from './Components/Login/Login';
import { addToDatabaseCart } from './utilities/databaseManager';
import Review from './Components/Review/Review';
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth';
import Shipment from './Components/Shipment/Shipment';



function App() {

  const[finalCart, setFinalCart]= useState([])

  const [qnty, setQnty]= useState(1);


  const handleAdd= ()=>{
      setQnty (qnty+1);
  }

  const handleRemove=()=>{
      setQnty(qnty-1)
  }

  
  // console.log("Ordered food",finalCart)

  const addToCart= (food)=>{
    const sameItem= finalCart.find(crt=> crt.id == food.id)
    const newCart= [...finalCart, food];
    setFinalCart(newCart);
    if(sameItem){
      const reamingCarts = finalCart.filter(crt => finalCart.id != food);
      setFinalCart(reamingCarts);
    }else{
      const newCart = [...finalCart,food]
      setFinalCart(newCart);
    }
    addToDatabaseCart(food.id,qnty)
  }

  return (

 
      <Router>
          <div className="App">
            <AuthContextProvider>
              <Header finalCart={finalCart} ></Header>
                <Switch>
                  <Route exact path="/">
                  <Search></Search>
                  <Route>
                  <Foods finalCart={finalCart}></Foods>
                  </Route>
                  <Portfolio></Portfolio>
                  <Footer></Footer>
                  </Route>
                  <Route path="/FoodDetails/:foodId">
                    <FoodDetails addToCart={addToCart} handleAdd={handleAdd} handleRemove={handleRemove} qnty={qnty}></FoodDetails>
                  </Route>
                  <Route path="/cart">
                    <Review finalCart={finalCart} setFinalCart={setFinalCart}></Review>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <Route path="/shipment">
                    <Shipment finalCart={finalCart}></Shipment>
                  </Route>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
            </AuthContextProvider>
        </div>
      </Router>

  );
}

export default App;
