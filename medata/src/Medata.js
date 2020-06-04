import React, { Component } from 'react';
import axios from "axios";

export default class Medata extends Component {
    constructor(){
        super();
        this.state ={
            medata:"Presupuesto destinado para la respectiva comuna o corregimiento en Presupuesto Participativo"
        };
    }
    handleButtonClick = () =>{
        axios.get("/api").then(response => {
           // console.log(response.data.body);
          // console.log(response);
          this.setState({
            medata:response.data.body
          });
        });

    };
    
    render() {
        return (
            <div>
               <button onClick = {this.handleButtonClick} type="button" class="btn btn-success">Techos presupuestales presupuesto participativo</button>
                <h1>MEDATA:{this.state.medata}</h1>
            </div>
        )
    }
}
