import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodsData from '../../fakeItems/foodsData'
import './FoodDetails.css';


const FoodDetails = (props) => {
  
    const{foodId}=useParams();
    const itemFoodDetails= foodsData.find(fd=>fd.id == foodId);


    const{name, price, description, img}= itemFoodDetails;

    const itemPrice= props.qnty
    const totalPrice= price*itemPrice;
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
                        <button onClick={props.handleAdd}>+</button>
                        <input className="text-center" type="text" name="qnty" value={props.qnty}/>
                        <button onClick={props.handleRemove}>-</button>
                        </div>
                        </div>
                        <div className="addToCart">
                            <input type="submit" value="Add to cart" onClick={()=>props.addToCart(itemFoodDetails) & window.history.back()} />
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