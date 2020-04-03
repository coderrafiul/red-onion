import React from 'react';
import './Meal.css';
import { Link } from 'react-router-dom';


const Meal = (props) => {
    // console.log(props.item)
    const{img, name, intro, price, id}= props.item;
    return (
          <div className="menu-item">
                        <Link to={"/details/"+ id}>
                        {<div class="card food-card" style={{width: 16 +'rem'}}>
                            <img src={img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5>{name} </h5>
                                <p>{intro} </p>
                                <p>Price: ${price} </p>
                            </div>
                        </div>}
                        </Link>
            </div>

        
    );
};

export default Meal;