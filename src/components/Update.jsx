import React, { useEffect, useState } from "react";

const Update=({updateInfo})=>{
    const [currentUpdate, setCurrentUpdate]= useState({
        name:'',
        price:''   
        
    })

    const setInputChange= (e)=>{
        const { name, value}= e.target;
        setCurrentUpdate((currState)=>({...currState, [name]: value}))
        // currentUpdate.map(()=>{
            //  setCurrentUpdate((currState)=>({...currState, [name]: value}))   
            // })
            

    }
    useEffect(()=>{
        console.log('effect', currentUpdate);
        
    },[currentUpdate])

    return (
        <div>
            <label htmlFor="name">name:</label>
            <input onChange={setInputChange} type="text" name="name" value={currentUpdate.name} />
            <br />
            <label htmlFor="price">price:</label>
            <input onChange={setInputChange} type="text" name="price" value={currentUpdate.price} />
            <br />
            <button onClick={()=>updateInfo(currentUpdate)}>change</button>
        </div>
    )
}
export default Update