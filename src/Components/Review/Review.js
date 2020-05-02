import React from 'react';
import './Review.css'

const Review = (props) => {

    const{img, name, price, quantity}= props.element;


    return (
        <div>
           
            <div className="card mb-3 review-card" style= {{maxWidth: 100 + '%' }}>
                <div  className="row no-gutters">
                    <div className="col-md-4">
                        <img src={img} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p style={{color: "red", fontWeight: 700, fontSize: 20 +"px"}} className="card-text">$ {price}</p>
                                <p className="card-text"><small className="text-muted">Delivery Free</small></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start align-items-center">
                        <button className="btn btn-light q-btn">-</button>
                        <span className="quantity"> {quantity} </span>
                        <button className="btn btn-light q-btn">+</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;