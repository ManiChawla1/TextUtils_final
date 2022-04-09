import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const toggleHandler= ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#20364d"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }

  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleHandler={toggleHandler} aboutText="About Us"/>
    
    <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm heading="Enter your text below"  mode={mode} />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
