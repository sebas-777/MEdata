import React, { Component } from 'react';
import axios from "axios";

export default class Medata extends Component {
    constructor(){
        super();
        this.state ={
            medata:"not yet gotten"
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
                <button onClick = {this.handleButtonClick}>Techos presupuestales presupuesto participativo</button>
                <h1>MEDATA:{this.state.medata}</h1>
            </div>
        )
    }
}
//<div>
 //               <button onClick = {this.handleButtonClick}>Techos //presupuestales presupuesto participativo</button>
 //               <h1>MEDATA:{this.state.medata}</h1>
   //         </div>