import React from 'react';
import './FoodItem.css';
import { Link } from 'react-router-dom';



const FoodItem = (props) => {
    console.log(props)
    
       
    
    const{img, name, intro, price, id}= props.item;
    return (
          <div className="menu-item">
                        <Link  to={"/FoodDetails/"+ id}>
                        {<div className="card food-card" style={{width: 16 +'rem'}}>
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5>{name} </h5>
                                <p>{intro} </p>
                                <p>Price: ${price} </p>
                            </div>
                        </div>}
                        </Link>
                        
            </div>

        
    );
};

export default FoodItem;