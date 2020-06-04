import React, { Component } from 'react';
import Medata from './Medata';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className ="app container">
       <div className ="jumbotron">
       <p className ="lead text-center">
       Presupuesto destinado para la respectiva comuna o corregimiento en Presupuesto Participativo </p>
       <Medata/>

        </div> 

      </div>
    )
  }
}

export default App;
//<Medata/>