import React from 'react';
import { useState } from 'react';
import './Foods.css';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import { useEffect } from 'react';

const Foods = (props) => {
    console.log(props);

    const cart= props.finalCart;

    const[menu, setMenu]= useState([]);
    const[selectedFoodType, setSelectedFoodType]= useState("Lunch")

    useEffect(()=>{
        fetch('http://localhost:4300/foods')
        .then(res=> res.json())
        .then(data=>{
            console.log('Data from database',data)
            setMenu(data)
        })
    },[])
    

    const handleAddFood= () =>{
        console.log("Food Added")
    }


    const selectedFoods =  menu.filter(food => food.category == selectedFoodType)



    return (
        <div className="item-container">
            <div className="category">
                <nav>
                    <button className="menu-btn" onClick={()=>setSelectedFoodType("Breakfast")}>Breakfast</button>
                    <button className="menu-btn" onClick={()=>setSelectedFoodType("Lunch")}>Lunch</button>
                    <button className="menu-btn" onClick={()=>setSelectedFoodType("Dinner")}>Dinner</button>
                </nav>
            </div>
            <div className="container">
                    <div className="row d-flex justify-content-between">
                    {selectedFoods.map(food=> <FoodItem key={food.id} item= {food}></FoodItem>)}
                    
                    </div>
            </div>
            <div className="d-flex justify-content-center">
              {
                  cart.length ?
                    <Link to="/shipment">
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