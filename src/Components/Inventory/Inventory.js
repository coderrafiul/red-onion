import React from 'react';
import foodsData from '../../fakeItems/foodsData';


const Inventory = () => {
    const handleAddItem= ()=>{
        const food= foodsData[0];
        console.log('Before post',food);
        fetch('http://glacial-headland-23319.herokuapp.com/addFood', {
            method: 'POST',
            body: JSON.stringify(foodsData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
        })
        .then(res=> res.json())
        .then(data=>{
            console.log('Post successful',data)
        })
        
    }
    return (
        <div>
            <h1>Add Items here...</h1>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default Inventory;