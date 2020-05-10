import React from 'react';
import ordercomplete from '../../images/ordercomplete.png'
import deliveryLogo from '../../images/Group 1151.png'
import helmetLogo from '../../images/Group 1152.png'
import './OrderComplete.css'


const OrderComplete = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 map">
                        <img src={ordercomplete} alt=""/>
                    </div>

                    <div className="col-md-4 summary d-flex justify-content-center">
                        <div className="card body" style={{maxWidth: 90 +"%"}}>
                        <div className="deliveryLogo">
                        <img  src={deliveryLogo} className="card-img-top" alt="..."/>
                        </div>
                        <div className="location">
                            <h4>Your location</h4>
                            <h6>Road: 06, Sector: 10</h6>
                            <br/>
                           
                            <h4>Shop address</h4>
                            <h6>Uttara Mascot Plaza</h6>
                        </div>
                        <div className="time">
                            <p>09:30</p>

                            <h6>Estimated delivery time</h6>
                        </div>
                        <div className="raider">
                        <div className="card mb-3" style={{maxWidth: 90+ "%"}}>
                            <div className="row no-gutters d-flex justify-content-around align-items-center">
                                <div className="col-md-4">
                                <img src={ helmetLogo } className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title raider">Hamim</h6>
                                    <p className="card-text"><small className="text-muted">Your raider</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-secondary place-order" >Contact us</button>
                          
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;