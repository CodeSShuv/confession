import React, { useState, useContext } from 'react'
// ---------------------------------------js file imports 
import createModal from '../../Operation/dataModal';
import { postData } from '../../Operation/postData';
// ---------------------------------------Context Imports 
import DataContext from '../DataContext'
import InputContext from '../InputContext'
import ValidationContext from '../ValidationContext';

const DataState = (props) => {
  const inputStateObject = useContext(InputContext);
  const errorMsgContext = useContext(ValidationContext);
  const [data, setData] = useState({ data: [] });
  const updateData = (e) => {
    e.preventDefault();
    if (inputStateObject.inputState.titleValue === "" && inputStateObject.inputState.descriptionValue === "") {
      errorMsgContext.setErrorMsg("Title and Description cannot be blank");
      return
    }
    let unFilteredArray = inputStateObject.inputState.descriptionValue.split(" "); 
    let filterArray = unFilteredArray.filter((e)=>{
      if(e!=" "){
        return
      }
      
    });
    if(filterArray.length <20){
     
      errorMsgContext.setErrorMsg("Description must contain 20 characters");
      return
    }

    const modal = createModal(inputStateObject.inputState.titleValue, inputStateObject.inputState.descriptionValue);
    setData(e => { e.data.unshift(modal) 
    return e});
    const response = postData(data)
    if(response){

    inputStateObject.setInputState({
      descriptionValue:"",
      titleValue:""
    })
    return}
    
    
  }
  return (
    <DataContext.Provider value={{ data, updateData,setData }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState