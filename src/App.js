import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const [textColor,setTextColor]=useState('form-check form-switch text-dark')
  const [alert,setAlert]=useState(null)
  const [theme,setTheme]=useState('blue')
  const changeThemeRed=()=>{
    document.body.style.backgroundColor='#b22222';
    setTheme('#8b0000')
    setMode('')
    
 }
 const changeThemeTeal=()=>{
   document.body.style.backgroundColor='#008080';
   setTheme('#5f9ea0')
    setMode('')
}
const changeThemeBlue=()=>{
 document.body.style.backgroundColor='#00008b';
 setTheme('blue')
 
    setMode('')
}

  const showAlert = (message,type)=>{
      setAlert(
        {
          msg:message,
          type:type
        }
      )
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }

  const toggleMod=()=>{
     if(mode==='light'){
      setMode('dark')
      setTextColor('form-check form-switch text-light')
      document.body.style.backgroundColor='#353839'
      showAlert("Dark mode has been enabled","success");
      setTheme('blue')
    //   setInterval(()=>{
    //       document.title='Text utils is amazing'
    //   },1500)
    //   setInterval(()=>{
    //     document.title='Install Text utils is not amazing'
    // },2000)
     }
     else{
      setMode('light')
      setTextColor('form-check form-switch text-dark')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      setTheme('blue')
     }
  }
  return (
    
    <>
       
       <Router>
       <Navbar name="Salik's blog" theme={theme} changeThemeTeal={changeThemeTeal} changeThemeBlue={changeThemeBlue} changeThemeRed={changeThemeRed} about="About section" mode={mode} toggleMod={toggleMod} textColor={textColor} /> 
       <Alert alert={alert}/>
        <Routes>
        <Route exact path='/' element={<TextForm theme={theme} showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        <Route exact path='/about' element={<About/>}/>
        </Routes>
       </Router>

       

    </>
    
  
    
    
    
    
    
  );
}

export default App;
