import React from 'react';
import foodsData from '../../fakeItems/foodsData'
import { useState } from 'react';
import './Foods.css';
import Meal from '../Meal/Meal';
import { Link } from 'react-router-dom';

const Foods = () => {
    const foods= foodsData.slice(6,12)
    const[menu, setMenu]= useState(foods);
  


    const cat1= foodsData.filter(fd=>fd.category==="Breakfast")
    const handleBreakfast=(cat1)=>{
        const newMenu1=[...cat1];
        setMenu(newMenu1);
        console.log(menu);
    }

    const cat2= foodsData.filter(fd=>fd.category==="Lunch")
    const handleLunch=(cat2)=>{
        const newMenu2=[...cat2];
        setMenu(newMenu2);
        console.log(menu);
    }

    const cat3= foodsData.filter(fd=>fd.category==="Dinner")
    const handleDinner=(cat3)=>{
        const newMenu3=[...cat3];
        setMenu(newMenu3);
        console.log(menu);
    }

    return (
        <div className="item-container">
            <div className="category">
                <nav>
                    <button className="menu-btn" onClick={()=>handleBreakfast(cat1)}>Breakfast</button>
                    <button className="menu-btn" onClick={()=>handleLunch(cat2)}>Lunch</button>
                    <button className="menu-btn" onClick={()=>handleDinner(cat3)}>Dinner</button>
                </nav>
            </div>
            <div className="container">
                    <div className="row d-flex justify-content-between">
                    {menu.map(food=> <Meal key={food.id} item= {food}></Meal>)}
                    </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/login"><button className="btn btn-secondary btn-lg">Checkout Your Food</button></Link>
            </div>
            
            
        </div>
    );
};

export default Foods;