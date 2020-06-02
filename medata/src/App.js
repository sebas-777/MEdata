import React, { Component } from 'react';
import Buscador from './components/Buscador';


class App extends Component{
  
  state = {
    termino:''
  }  

  consultarApi = () =>{
  
  const termino = this.state.termino
  const url = `http://medata.gov.co/api/action/datastore/search.json?resource_id=d778f6a8-c002-4443-9ec4-be71f6382751&q=${termino}`;

 // console.log(url);
 fetch(url)
    .then(respuesta =>respuesta.json())
    .then(resultado =>console.log(resultado) )
  
  }
  
  datosBusqueda =(termino)=>{
   this.setState({
     termino
   },() => {
     this.consultarApi();
   })
  }
  
  render(){
    return(
      <div className = "app container">
        <div className ="jumbotron">
        <p className ="lead text-center" >Techos presupuestales presupuesto participativo</p>
        <Buscador
          datosBusqueda={this.datosBusqueda}
        />
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
