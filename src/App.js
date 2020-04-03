import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './Components/Foods/Foods';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Foods></Foods>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
