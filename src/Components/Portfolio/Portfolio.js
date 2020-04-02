import React from 'react';
import Img1 from '../../images/Portfolio/adult-blur-blurred-background-687824.png';
import Img2 from '../../images/Portfolio/chef-cook-food-33614.png';
import Img3 from '../../images/Portfolio/architecture-building-city-2047397.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
                <div className="we">
                <h3>Why you choose us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magnam accusantium repellat ea error architecto.</p>
                </div>

            <div class="card-deck">
                <div class="card">
                    <img src={Img1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Fast Delivery</h5>
                    <p class="card-text portfolio-desc">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="see-more"><small>See More..</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={Img2} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">A Good Auto Responder</h5>
                    <p class="card-text portfolio-desc">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="see-more"><small>See More..</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src={Img3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Home Delivery</h5>
                    <p class="card-text portfolio-desc">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="see-more"><small>See More..</small></p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Portfolio;