import React from 'react';
import './Search.css';
import Banner from '../../images/bannerbackground.png';

const Search = () => {
    return (
        <div className="banner">
          <form className="search">
          <input type="text" placeholder="Search food"/>
          <button className="banner-btn">Srarch</button>
          </form>
          
        </div>
    );
};

export default Search;