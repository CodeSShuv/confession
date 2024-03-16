import React, { useState } from 'react';
import ValidationContext from '../ValidationContext';

const ValidationState = (props) => {
    const [errorMsg, setErrorMsg]  = useState('');
  return (
    <ValidationContext.Provider value = {{errorMsg,setErrorMsg}}>
        {props.children}
    </ValidationContext.Provider>
  )
}

export default ValidationState;