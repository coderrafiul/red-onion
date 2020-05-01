import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'

const Shipment = (props) => {

    console.log(props.finalCart)
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

  
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
                    <h4>This is order preview</h4>
                </div>

            </div>
        </div>
        
    );
};

export default Shipment;