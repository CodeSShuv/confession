import {useState} from "react";
import InputContext from "../InputContext";

const InputState =(props)=>{
    const [inputState, setInputState] = useState({
        titleValue:"",
        descriptionValue:""
    });
    const changeInputState = (e)=>{
        if(e.target.id ==="title-input"){
            
            setInputState(prev =>{return {
                titleValue: e.target.value ,
                descriptionValue: prev.descriptionValue
        }})    
        }else{
            setInputState( prev=> { return{
                descriptionValue: e.target.value,
                titleValue: prev.titleValue 
        }})  
        }
    }
    return(
        <InputContext.Provider value={{inputState,changeInputState,setInputState }}>
            {props.children}
        </InputContext.Provider>
    )
}
export default InputState;