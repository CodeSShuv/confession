import React, { useContext,useEffect } from 'react'
import "./Css/Confessions.css"
import Card from './Card'
import DataContext from '../Contexts/DataContext'

const Confessions = () => {
  const dataStateObject = useContext(DataContext);
  const fetchData = async () => {
    // try{
      const res  = await fetch("https://confessions-11a57-default-rtdb.firebaseio.com/dataContainer.json");
      
      const data = await res.json();
   
      console.log(data.data)
      dataStateObject.setData({data:data.data});
    // }catch(e){
      // alert("couldn't fetch data");
    // }
  }
  useEffect(() => {
    
    fetchData()
    console.log(dataStateObject.data)
  }, [dataStateObject.data.data]);
  
  return (
    <section className='confession-section'>
      <h2>Confessions</h2>
      <div className="confession-card-container">
      {        
          dataStateObject.data.data.map((e,i) => {
            return (
              <div className="row" key={i}>
                <Card title={e.title} description={e.description} date ={e.date} />

              </div>
            )
          })}
        
      </div>

    </section>
  )
}

export default Confessions