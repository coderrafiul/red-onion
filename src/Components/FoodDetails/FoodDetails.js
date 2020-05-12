import React from 'react';
import { useParams} from 'react-router-dom';
import './FoodDetails.css';
import { useState } from 'react';
import { useEffect } from 'react';


const FoodDetails = (props) => {
    console.log(props)
    const{foodId}=useParams();
    const [currentFood, setCurrentFood]= useState({})

    useEffect(()=>{
        fetch('https://glacial-headland-23319.herokuapp.com/foods/'+foodId)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            data.quantity= props.quantity;
            setCurrentFood(data)
        })

    },[foodId, props.quantity])

    const itemCount= props.quantity;
    const totalPrice= currentFood.price*itemCount;
 
    return (
        <div className="container d-flex justify-content-start">
            
            <div className="card FoodDetails-card mb-3" style={{maxWidth: 100+ '%'}}>
                <div className="row no-gutters">
                    
                    <div className="col-md-6">
                    <div className="card-body">
                        <h1 className="card-title">{currentFood.name}</h1>
                        <h3 className="card-text">{currentFood.description}</h3>
                        <br/>
                        <div className="d-flex justify-content-between">
                        <div>
                        <h4 className="card-text">${totalPrice}</h4>
                        </div>
                        <br/>
                        <div className="input-group">
                        <button onClick={props.handleAdd}>+</button>
                        <input className="text-center" type="text" name="quantity" value={props.quantity}/>
                        <button onClick={props.handleRemove}>-</button>
                        </div>
                        </div>
                        <div className="addToCart">
                            <input type="submit" value="Add to cart" onClick={()=>props.addToCart(currentFood) & window.history.back()} />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <img src={currentFood.img} className="card-img" alt="..."/>
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default FoodDetails;