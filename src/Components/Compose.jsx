import React,{useContext,useEffect} from 'react'
import "./Css/Compose.css"
import InputContext from '../Contexts/InputContext'
import DataContext from '../Contexts/DataContext'

const Compose = () => {
    const inputStateObject = useContext(InputContext);
    const dataStateObject = useContext(DataContext);


    useEffect(()=>{
       

    }, [inputStateObject.inputState]);
    
  return (
    <div className='compose-center'>
        <form>
            <div className="input-aligner">
                <div className="label">Title : </div>
                <div className="input">
                <input type="text" id='title-input' onChange={inputStateObject.changeInputState} value={inputStateObject.inputState.titleValue}placeholder='Title'/>
                </div>
                <div className="errorMsg"></div>
            </div>
            <div className="input-aligner">
            <div className="label">Description :</div>
                <div className="input">
                    <textarea name="" id="description-input" cols="30" rows="10" onChange={inputStateObject.changeInputState} value={inputStateObject.inputState.descriptionValue} placeholder='Description'></textarea>
                
                </div>
            </div>
            <div className="input-aligner">
                <div className="input">
             
                <input type="submit" id='submit-input' value={"confess"} onClick={dataStateObject.updateData} />
                </div>
            </div>
            
            
        </form>
    </div>
  )
}

export default Compose