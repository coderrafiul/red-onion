import React from 'react';
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
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';



function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Search></Search>
        <Foods></Foods>
        <Portfolio></Portfolio>
        <Footer></Footer>
        </Route>
        <Route path="/details/:foodId">
          <Details></Details>
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
