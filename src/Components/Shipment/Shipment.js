import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import Review from '../Review/Review';
import foodsData from '../../fakeItems/foodsData'
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useState } from 'react';

const Shipment = (props) => {

    const[customer, setCustomer]= useState(null)


    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        const newCustomer= {data};
        setCustomer(newCustomer);
    };

    console.log("Buyer", customer);
    

    
    useEffect(()=>{
        // cart
        const savedCart= getDatabaseCart();
        const foodId= Object.keys(savedCart);

        const cartFoods= foodId.map(id => {
            const addedFood = foodsData.find(food => food.id == id);
            addedFood.quantity= savedCart[id];
            return addedFood;
        })


        console.log(cartFoods)

        props.setFinalCart(cartFoods)
        
     
    },[])

    const cart= props.finalCart;

    const subTotal= cart.reduce((subTotal, food)=> subTotal + food.price*food.quantity,0);
    const tax= subTotal/10;
    const delivery= 10;
    const total= (subTotal+ tax+ delivery);

    

    
    
    
    return (
        <div className="container">
            
            <div className="row ">
                <div className="delivery col-md-6">


                    <h3 className="ship-header">Edit Delivery Details</h3>
                
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="addressLine1" ref={register({ required: true })} placeholder="AddressLine1" />
                        

                        <input name="addressLine2" ref={register} placeholder="AddressLine2" />
                        {errors.addressLine1 && <span className="error">Address is required</span>}

                        <input name="city" ref={register({ required: true })} placeholder="City" />
                        {errors.city && <span className="error">City is required</span>}

                        <input name="country" ref={register({ required: true })} placeholder="Country" />
                        {errors.country && <span className="error">Country is required</span>}

                        <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code" />
                        {errors.zipCode && <span className="error">Zip Code is required</span>}
                        
                        <input className="btn-submit" type="submit" />
                    </form>
                </div>

                <div className="order-preview col-md-6">
                    <div className="order-info">
                        <h5>From Uttara Mascot Plaza</h5>
                        <h6>Arriving in 20-30 minutes</h6>
                        <h6>Road no: 06, Sector: 10.</h6>
                    </div>
                    <br/>
                    {props.finalCart.map(food=> <Review key={food.id} element={food}></Review>)}
                    <div className="bill">
                        <h6>Subtotal: $ {subTotal.toFixed(2)} </h6>
                        <h6>Tax: $ {tax.toFixed(2)}</h6>
                        <h6>Delivery fee: $ {delivery}</h6>
                        <h5>Total: $ {total.toFixed(2)}</h5>
                    </div>
                    {
                        customer ?
                        <button className="btn btn-secondary btn-lg place-order">Place Order</button>
                        :
                        <button className="btn btn-secondary btn-lg place-order" disabled>Place Order</button>
                    }

                </div>

            </div>
        </div>
        
    );
};

export default Shipment;