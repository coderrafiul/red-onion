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
import { addToDatabaseCart, processOrder } from './utilities/databaseManager';
import { AuthContextProvider, PrivateRoute, useAuth } from './Components/Login/useAuth';
import Shipment from './Components/Shipment/Shipment';
import OrderComplete from './Components/OrderComplete/OrderComplete';
import Inventory from './Components/Inventory/Inventory';
import Payment from './Components/CheckOutForm/Payment';



function App() {



  const[finalCart, setFinalCart]= useState([]);


  const [quantity, setQuantity]= useState(1);

  const [orderId, setOrderId]= useState(null);


  const handleAdd= ()=>{
    setQuantity (quantity+1);
  }

  const handleRemove=()=>{
    setQuantity(quantity-1)
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
    addToDatabaseCart(food.id, quantity)
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
                    <FoodDetails addToCart={addToCart} handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity}></FoodDetails>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <PrivateRoute path="/shipment">
                    <Shipment finalCart={finalCart} setFinalCart={setFinalCart} orderId={orderId} setOrderId={setOrderId}></Shipment>
                  </PrivateRoute>
                  <Route path='/inventory'>
                    <Inventory></Inventory>
                  </Route>
                  <Route path="/ordered">
                    <OrderComplete orderId={orderId} setOrderId={setOrderId}></OrderComplete>
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
