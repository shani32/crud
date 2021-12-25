import React from "react";
import './style.css'

const Item =({id, type, img, deleteOfItem, updateOfItem, name, currency})=>{

    return(
        <div className="wrapper">
        <div className="container">
          <div className="itemType">{type}{currency}</div> 
          <div className="itemImage"><img src={img} alt="image"/></div> 
          <div className="phoneprice">{name}</div> 

          <div className="itemBtn">
              <button onClick={()=>deleteOfItem(id)}>delete</button>
              <button onClick={()=>updateOfItem(id)}>update</button>
          </div>
        </div>
        </div>
    )
}
export default Item