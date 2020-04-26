import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import foodsData from '../../fakeItems/foodsData'

const Review = (props) => {

    

    useEffect(()=>{
        // cart
        const savedCart= getDatabaseCart();
        const foodId= Object.keys(savedCart);

        const cartFoods= foodId.map(id => {
            const addedFood = foodsData.find(food => food.id == id);
            addedFood.quantity= savedCart[id];
            return addedFood;
        })

        props.setFinalCart(cartFoods);
     
    },[])
    return (
        <div>
            <h1>Cart Items: {props.finalCart.length}</h1>
        </div>
    );
};

export default Review;