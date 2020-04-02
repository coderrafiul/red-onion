import React from 'react';
import './Meal.css';


const Meal = (props) => {
    console.log(props.item)
    const{img, name, intro, price}= props.item;
    return (
        <div className="container d-flex justify-content-center food-item">
                <div className="row">
             
                    <div className="col-md-4">
                        <div class="card" style={{width: 20 +'rem'}}>
                            <img src={img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h4>{name} </h4>
                                <p>{intro} </p>
                                <p>Price: ${price} </p>
                            </div>
                        </div>
                    </div>
                    
             
                </div>
        </div>
        
    );
};

export default Meal;