import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Messege from './components/Messege'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Mead" degree="CSE" > <p> this is  engineers property </p> </Greet>
      <Greet name="Ahmed" degree="CSSE" > <button>Action</button></Greet>
      <Greet name="Fahim" degree="SE" />
      <Welcome name="Mead" degree="CSE"></Welcome>
      <Welcome name="Ahmed" degree="CSSE"></Welcome>
      <Welcome name="Fahim" degree="SE"></Welcome> */}
      {/*<Hello />*/}
      {/* <Messege /> */}
      {/* <Counter />
      <br />
      <FunctionClick />
      <br />
      <ClassClick />
      <br />
      <EventBind />    
      <br />
      <ParentComponent />    */}
      <UserGreeting />              
    </div>
  );
}

export default App;
