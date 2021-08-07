import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './components/Home'
import {Switch,Route} from 'react-router-dom';
import Contacts from './components/Contacts';
import About from './components/About';
import Services from './components/Services';
import Bar from './components/Bar';
import Login from './components/Login';
import Footer from './components/Footer'

const App=()=>{
  
  return (
    <>
     
    <Bar/>
    
     <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contacts" component={Contacts}/>
      
  
    </Switch> 

   <Footer/>

    </>
  )
}
export default App;
