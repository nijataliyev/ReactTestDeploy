import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
     {/* <Greet></Greet> */}
     {/* <Welcome></Welcome> */}
     <Hello name="Nicat"/>
     <Hello name="Eli"/>
     <Hello name="Qalib"/>
    </div>
  );
}

export default App;
