import React from 'react'
import "./App.css"
import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import Confessions from './Components/Confessions'
import InputState from './Contexts/States/InputState'
import DataState from './Contexts/States/DataState'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import Alert from './Components/Alert'

const App = () => {
  
  return (
    <>

      {/* <Alert/> */}
      <Router>
        <InputState>
          <DataState>
            <header className='page-title'>
              <h1>Bhawana</h1>
            </header>
            <Navbar />
            <Routes>

              <Route path={"/home"} element={<Home />} />
              <Route path={"/confession"} element={<Confessions />} />
            </Routes>
            <footer className='page-bottom'>
              <p>
                The Shuvam Gautam Productions.</p>
              {/* <div className="associateList">
              <div>Associate:</div>
              <p>Rishav Adhikari</p>
            </div> */}
            </footer>
          </DataState>
        </InputState>

      </Router>


    </>
  )
}

export default App