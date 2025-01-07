import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About.js';
import Alert from './components/Alert.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch as Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
    // setTimeout({
    //   setAlert:(null)
    // }),3000;
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode is enabled","success");
    }
    else{  
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")
    }
  }
  return (
 <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode}  />}></Route>
            <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
 </>
  );
}

export default App;
