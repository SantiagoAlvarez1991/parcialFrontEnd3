import data from "./data.json"
import React from "react"
import "../index.css"

let containerSteps = [];


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = ({            
            id : "",
            historia : "",
            opciones : "",
            step : 0, 
            selectedPath: "",
                                         
        })
    }

    componentDidMount(){          
        this.setState({            
            id : data[0].id,
            historia : data[0].historia,
            opciones : data[0].opciones,
            step : 2,  
            selectedPath: "",
        })    
    }
    


    handlerStory(path){   
        const stepJSON = JSON.stringify(this.state.step)            

        data.map((unDato)=>{            
            if(unDato.id === stepJSON +path){                
                this.setState({
                    id : unDato.id,
                    historia : unDato.historia,
                    opciones : unDato.opciones, 
                    step : this.state.step +1,
                    selectedPath: path,                          
                })      
            }
            return unDato
        }) 
        if(this.state.selectedPath !==""){
            containerSteps.push(this.state.selectedPath.toUpperCase())
        }
        if(this.state.step > 5){
            alert("Fin")
        }            
    }

    handlerRecordSteps(){   
        return(
            containerSteps.map((oneStep,index) =>(                   
                <li key={index}>{oneStep}</li>))                                   
        )                
    }

    render(){
        return(
            <div className="layout">
                <div className="historia">           
                    <p>{this.state.historia}</p>              
                </div>
                <div className="contenedorOpciones">
                    <div className="opcion">
                        <button className="botones" onClick={()=> this.handlerStory("a")}>A</button>
                        <p>{this.state.opciones.a}</p>                    
                    </div>
                    <div className="opcion">
                        <button className="botones" onClick={()=> this.handlerStory("b")}>B</button>
                        <p>{this.state.opciones.b}</p>
                    </div> 
                </div>
               
                <div className="recordatorio">
                    <p>Selección anterior: {this.state.selectedPath.toUpperCase()}</p> 
                    <p>Historial de opciones elegidas:</p>
                    <ul>{this.handlerRecordSteps()}</ul>
                </div>

            </div>            
        )
    }
}

export default Main