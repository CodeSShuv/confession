import React, { useState,useContext } from 'react'
// ---------------------------------------js file imports 
import createModal from '../../Operation/dataModal';
import { postData } from '../../Operation/postData';
// ---------------------------------------Context Imports 
import DataContext from '../DataContext'
import InputContext from '../InputContext'


const DataState = (props) => {
  const inputStateObject = useContext(InputContext);

  const [data, setData] = useState({ data: [] });
  const updateData = (e) => {
    e.preventDefault();

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