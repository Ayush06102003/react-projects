
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React,{useState} from 'react';



function App() {
 const [mode,setMode] = useState('light')

 const toggle = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0e0e1c'
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white'

  }
 }
 const [isChecked, setIsChecked] = useState(false);
 const toggleRed = ()=>{
  setIsChecked(!isChecked)
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#400103'
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white'

  }
 

 };

 const toggleBlue = ()=>{
  setIsChecked(!isChecked)
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#021d4a'
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white'

  }
 }
  return (
    <>
    <Navbar title="My React" aboutText="About us" mode = {mode} toggle={toggle} toggleBlue={toggleBlue} toggleRed={toggleRed} checked={isChecked}/>
    <div className="container">
      <Textarea title="Analyze the text" mode ={mode}/>
    </div>
    </>
  );
}

export default App;
