import React from 'react';
import { useParams, Link } from 'react-router-dom';
import foodsData from '../../fakeItems/foodsData'
import './Details.css';
import { useState } from 'react';

const Details = () => {
    const{foodId}=useParams();
    const itemDetails= foodsData.find(fd=>fd.id == foodId);
    console.log(itemDetails);

    const{name, price, description, img}= itemDetails;

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
            
            <div class="card details-card mb-3" style={{maxWidth: 100+ '%'}}>
                <div class="row no-gutters">
                    
                    <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title">{name}</h1>
                        <h3 class="card-text">{description}</h3>
                        <br/>
                        <div className="d-flex justify-content-between">
                        <div>
                        <h4 class="card-text">${totalPrice}</h4>
                        </div>
                        <br/>
                        <div className="input-group">
                        <button onClick={handleAdd}>+</button>
                        <input className="text-center" type="text" name="qnty" value={qnty}/>
                        <button onClick={handleRemove}>-</button>
                        </div>
                        </div>
                        <div className="addToCart">
                            <input type="submit" value="Add to cart"/>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <img src={img} class="card-img" alt="..."/>
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default Details;