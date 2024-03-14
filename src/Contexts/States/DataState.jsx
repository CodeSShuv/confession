import React, { useState, useContext } from 'react'
import DataContext from '../DataContext'
import createModal from '../../Operation/dataModal';
import InputContext from '../InputContext'
import { postData } from '../../Operation/postData';

const DataState = (props) => {
  const inputStateObject = useContext(InputContext);
  const [data, setData] = useState({ data: [] });
  const updateData = (e) => {
    e.preventDefault();
    if (inputStateObject.inputState.titleValue === "" && inputStateObject.inputState.descriptionValue === "") {
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