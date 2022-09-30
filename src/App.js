import Navbar from './components/Navbar'
import Textform from './components/Textform'; 
import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert = (message,type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setalert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled ","success");
      document.title = "Textutils - Dark Mode";
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled ","success");
      document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="SRK Textutils" mode={mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
            <Textform showalert={showalert}heading = "Enter the text here" mode={mode} />
          {/* </Route> */}

          
    {/* </Switch> */}
    </div>
    {/* </Router> */}

    </>
  );
}

export default App;
