import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import Review from '../Review/Review';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckOutForm/CheckOutForm';



const Shipment = (props) => {
  

    const { register, handleSubmit,errors } = useForm();
    // const [orderId, setOrderId]= useState(null);
    const orderId= props.orderId;
    const setOrderId= props.setOrderId

    const[menu, setMenu]= useState([]);

    const[customer, setCustomer]= useState(null);

    const[user, setUser]= useState(null)

    const stripePromise = loadStripe('pk_test_6Q68hGTzOu1GetiEvUPF6QX700Qrmfil9z');


    const auth= useAuth();

    console.log(auth.user.email);
    
    const onSubmit = data => {
        setCustomer(data);
      
    };

  


    useEffect(()=>{
        fetch('http://localhost:4300/foods')
        .then(res=> res.json())
        .then(data=>{
            console.log('Data from database',data)
            setMenu(data)
        })
    },[])

    
    useEffect(()=>{
        // cart
        const savedCart= getDatabaseCart();
        const foodId= Object.keys(savedCart);

        if(menu.length){
            const cartFoods= foodId.map(id => {
                const addedFood = menu.find(food => food.id == id);
                addedFood.quantity= savedCart[id];
                return addedFood;
            })
    
    
            console.log(cartFoods)
    
            props.setFinalCart(cartFoods)
            
        }
     
    },[])

    const cart= props.finalCart;

    const handlePlaceOrder=(payment)=>{
        
        const orderDetails= {email:auth.user.email, cart: cart , shipment: customer, payment: payment}
        
        fetch('http://localhost:4300/placeOrder', {
            method: 'POST',
            body: JSON.stringify(orderDetails),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        })
        .then(res=> res.json())
        .then(order=>{
            setUser(true);
            setOrderId(order._id);
            processOrder();
        })
    }

    
    const subTotal= cart.reduce((subTotal, food)=> subTotal + food.price*food.quantity,0);
    const tax= subTotal/10;
    const delivery= 10;
    const total= (subTotal+ tax+ delivery);

    

    
    
    
    return (
        <div className="container">
            
            <div className="row" style={{display: customer && 'none'}}>
                <div className="delivery col-md-6"  >


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
                        
                        <button className="btn btn-secondary btn-lg place-order" onClick={handlePlaceOrder}>Place Order</button>
                        
                        :
                        <button className="btn btn-secondary btn-lg place-order" disabled>Place Order</button>
                    }

                </div>

            </div>

            <div className="row" >
                <div className="col-md-6" style={{display: customer ? 'block' : 'none'}}>
                <h3>Payment Information</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                    </Elements>
                    <br/>
                    {
                       orderId && <div>
                           <h3>Thank you for shopping with us</h3>
                           <p>Your Order Id is {orderId}</p>
                           <br/>
                           <Link to='/ordered'>
                            <button className="btn btn-secondary">Proceed</button>
                            </Link>
                       </div>
                   }

                   

                    
                </div>
            </div>

        
        </div>
        
    );
};

export default Shipment;