import React from 'react';
import foods from '../../fakeItems/foods'
import { useState } from 'react';
import './Foods.css';
import Meal from '../Meal/Meal';

const Foods = () => {
    // console.log(foods);
    const first6= foods.slice(0,6);
    const[menu, setMenu]= useState(first6);

    return (
        <div className="item-container">
            <div className="category">
                <nav>
                    <a href="/breakfast">Breakfast</a>
                    <a  href="/lunch">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
            </div>
            <div className="container">
                    <div className="row d-flex justify-content-between">
                    {menu.map(food=> <Meal item= {food}></Meal>)}
                    </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary btn-lg" disabled>Checkout Your Food</button>
            </div>
            
            
        </div>
    );
};

export default Foods;