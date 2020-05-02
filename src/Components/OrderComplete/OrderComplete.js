import React from 'react';
import demoMap from '../../images/demoMap.jpg'
import deliveryLogo from '../../images/Group 1151.png'
import helmetLogo from '../../images/Group 1152.png'
import './OrderComplete.css'


const OrderComplete = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 map">
                        <img src={demoMap} alt=""/>
                    </div>

                    <div className="col-md-4 summary">
                        <div className="card body" style={{maxWidth: 100 +"%"}}>
                        <div className="deliveryLogo">
                        <img  src={deliveryLogo} className="card-img-top" alt="..."/>
                        </div>
                        <div className="location">
                            <h3>Your location</h3>
                            <h5>Road: 06, Sector: 10</h5>
                            <br/>
                            <br/>
                            <br/>
                            <h3>Shop address</h3>
                            <h5>Uttara Mascot Plaza</h5>
                        </div>
                        <div className="time">
                            <p>09:30</p>

                            <h5>Estimated delivery time</h5>
                        </div>
                        <div className="raider">
                        <div class="card mb-3" style={{maxWidth: 90+ "%"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={ helmetLogo } className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title raider">Hamim</h5>
                                    <p className="card-text"><small class="text-muted">Your raider</small></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-secondary btn-lg place-order" >Contact us</button>
                          
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;