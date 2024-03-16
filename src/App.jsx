import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// ---------------------------Css Imports
import "./App.css"
// -----------------------------Component Imports
import Navbar from "./Components/Navbar"
import Home from './Components/Home'
import Confessions from './Components/Confessions'
// ----------------------------------State Imports 
import InputState from './Contexts/States/InputState'
import DataState from './Contexts/States/DataState'
import ValidationState from './Contexts/States/ValidationState'

const App = () => {

  return (
    <>

      {/* <Alert/> */}
      <Router>
        <ValidationState>
          <InputState>
            <DataState>
              <header className='page-title'>
                <h1>Bhawana</h1>
              </header>
              <Navbar />
              <Routes>

                <Route path={"/"} element={<Home />} />
                <Route path={"/confession"} element={<Confessions />} />
              </Routes>
              <footer className='page-bottom'>
                <p>
                  The Shuvam Gautam Productions.</p>
           
              </footer>
            </DataState>
          </InputState>
        </ValidationState>
      </Router>


    </>
  )
}

export default App