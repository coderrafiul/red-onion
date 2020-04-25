import React from 'react';
import foodsData from '../../fakeItems/foodsData'
import { useState } from 'react';
import './Foods.css';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';

const Foods = (props) => {
    console.log(props);

    const cart= props.cart;
    
    const foods= foodsData.slice(6,12)
    const[menu, setMenu]= useState(foods);
    

    const handleAddFood= () =>{
        console.log("Food Added")
    }

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
                    {menu.map(food=> <FoodItem key={food.id} item= {food}></FoodItem>)}
                    
                    </div>
            </div>
            <div className="d-flex justify-content-center">
              {
                  cart.length ?
                    <Link to="/login">
                      <button className="btn btn-secondary btn-lg" onClick= {handleAddFood}>Checkout Your Food</button>
                    </Link>
                  :
                  <button className="btn btn-secondary btn-lg" onClick= {handleAddFood} disabled>Checkout Your Food</button>
              }
            </div>
            
            
        </div>
    );
};

export default Foods;