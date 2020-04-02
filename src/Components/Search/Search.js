import React from 'react';
import './Search.css';
import Banner from '../../images/bannerbackground.png';

const Search = () => {
    return (
        <div className="banner d-flex justify-content-center">
          <h1>Best food waiting for your belly</h1>
          <form className="search">
          <input type="text" placeholder="Search food"/>
          <button className="banner-btn">Srarch</button>
          </form>
          
        </div>
    );
};

export default Search;