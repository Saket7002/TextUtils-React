import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [mode1, setMode1] = useState('light') 
  const [alert, setAlert] = useState(null)

   const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null)
    },1500);
   }

  const toggleMode = ()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#043743';
      showAlert("Dark mode is enabled","Success : ");
     }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","Success : ");
     }
  }
  const toggleMode1 = ()=>{
    if(mode1 == 'light'){
    setMode1('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode is enabled","Success : ");
    }else{
      setMode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","Success : ");
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" AboutText = "About"  mode = {mode} toggleMode = {toggleMode} mode1 = {mode1} toggleMode1 = {toggleMode1}/>
    <Alert alert = {alert}/>  
    <div className="container my-3">
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyse" mode = {mode} mode1 ={mode1}/>
          </Route>
        </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
