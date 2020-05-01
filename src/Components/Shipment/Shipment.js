import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => console.log(data);

  
    return (
        <div className="shipment">
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register({ required: true })} placeholder="Name" />
                {errors.name && <span>Name is required</span>}

                <input name="email" ref={register({ required: true })} placeholder="Email" />
                {errors.email && <span>Email is required</span>}

                <input name="AddressLine1" ref={register({ required: true })} placeholder="AddressLine1" />
                {errors.address && <span>Address is required</span>}

                <input name="AddressLine2" ref={register} placeholder="AddressLine2" />

                <input name="city" ref={register({ required: true })} placeholder="City" />
                {errors.city && <span>city is required</span>}

                <input name="country" ref={register({ required: true })} placeholder="Country" />
                {errors.country && <span>Country is required</span>}

                <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code" />
                {errors.zipCode && <span>Zip Code is required</span>}
                
                <input className="btn-submit" type="submit" />
            </form>
        </div>
        
    );
};

export default Shipment;