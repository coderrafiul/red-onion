import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodsData from '../../fakeItems/foodsData'
import './FoodDetails.css';
import { useState } from 'react';
import {UserContext} from '../../App';

const FoodDetails = (props) => {
    
    console.log(props);
    const{foodId}=useParams();
    const itemFoodDetails= foodsData.find(fd=>fd.id == foodId);


    const{name, price, description, img}= itemFoodDetails;

    const [qnty, setQnty]= useState(1);

    const handleAdd= ()=>{
        setQnty (qnty+1);
    }

    const handleRemove=()=>{
        setQnty(qnty-1)
    }
    const totalPrice= price*qnty
    return (
        <div className="container d-flex justify-content-start">
            
            <div className="card FoodDetails-card mb-3" style={{maxWidth: 100+ '%'}}>
                <div className="row no-gutters">
                    
                    <div className="col-md-6">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <h3 className="card-text">{description}</h3>
                        <br/>
                        <div className="d-flex justify-content-between">
                        <div>
                        <h4 className="card-text">${totalPrice}</h4>
                        </div>
                        <br/>
                        <div className="input-group">
                        <button onClick={handleAdd}>+</button>
                        <input className="text-center" type="text" name="qnty" value={qnty}/>
                        <button onClick={handleRemove}>-</button>
                        </div>
                        </div>
                        <div className="addToCart">
                            <input type="submit" value="Add to cart" onClick={()=>props.addToCart(itemFoodDetails)} />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <img src={img} className="card-img" alt="..."/>
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default FoodDetails;