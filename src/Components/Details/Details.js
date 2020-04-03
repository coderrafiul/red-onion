import React from 'react';
import { useParams, Link } from 'react-router-dom';
import foodsData from '../../fakeItems/foodsData'
import './Details.css';

const Details = () => {
    const{foodId}=useParams();
    const itemDetails= foodsData.find(fd=>fd.id == foodId);
    console.log(itemDetails);

    const{name, price, description, img}= itemDetails;
    return (
        <div className="container d-flex justify-content-start">
            
            <div class="card details-card mb-3" style={{maxWidth: 100+ '%'}}>

              <Link to="/"><button>Home</button></Link>
                <div class="row no-gutters">
                    
                    <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title">{name}</h1>
                        <h3 class="card-text">{description}</h3>
                        <br/>
                        <h4 class="card-text">${price}</h4>
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