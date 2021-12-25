import React, {useEffect, useState } from "react";
import Item from "./components/item";
import Update from "./components/Update";
import api from "./components/api";
import '../src/components/style.css'


const App=()=>{
    const [localData, setLocalData]= useState([])
    const retrieveContacts = async () => {
    const response = await api.get("/");
    console.log("response", response);
    return response.data;
      };
      useEffect(() => {
       console.log(api)
        const getAllContact = async () => {
        const allContacts = await retrieveContacts();
        console.log("allContacts", allContacts);
         if (allContacts) setLocalData(allContacts);
        };
         getAllContact();
        }, []);
      
    

    const deleteItem =(id)=>{
    const newIndex=localData.filter((item)=>{
    return item.id !==id
    })
    setLocalData(newIndex)
    }
 const [currentId, setCurrentId]= useState((null))  
 const [isUpdate, setIsUpdate]= useState(false)   

const updateItem =(id)=>{
    console.log(id)
  setIsUpdate(!isUpdate)
  setCurrentId(id)
  console.log(isUpdate)
  
    }
   
    const updateInfo =async(info)=>{
        console.log(currentId)
    //     const updateContacts = async () => {
         console.log(info)
        await api.put(`/${currentId}`, info)
       
    //         console.log("response", responseUpdate);
    //         return responseUpdate.data.id;
    //           };
   
    // useEffect(() => {
    //     console.log(api)
    //      const getAllUpdate = async () => {
    //      const allUpdates = await updateContacts();
    //      console.log("allContacts", allUpdates);
    //       if (allUpdates) setLocalData(allUpdates);
    //      };
    //      getAllUpdate();
    //      }, []);

     }
    return(
        <div>
            <div className="listContainer">
           {localData.map(item=>{
              return <Item 
              id={item.id} 
              deleteOfItem={deleteItem}
              updateOfItem={updateItem} 
              key={item.id} 
              type={item.price} 
              img={item.avatar}
              name={item.name}
              currency={item.currency}/>
            
           })}
            </div>
            <div className="updateContainer">
           {isUpdate && <Update updateInfo={updateInfo} />}
            </div>
        </div>
    )
}

export default App