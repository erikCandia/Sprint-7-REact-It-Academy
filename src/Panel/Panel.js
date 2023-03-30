import React from "react";
import { Input, Label} from "../components/styled";
import Info from "../components/Info";



const ComponentPanel = ({webOptions,onChange, handleButton})=>{
  
  //Declaro este useState, para mostrar u ocultar los paneles de informacion
  const[state, setState] = React.useState(false); 
  
  return(
    <div className="border border-secondary rounded p-3 m-3">
      {
        //Recorro el array de weOptions para obtener los datos que muestren el panel
        webOptions.map(input => 
          <div key={input.name}>
            <Label>{input.label}</Label>
            <button className="btn btn-primary m-2" onClick={(e) => handleButton('-', input.name)}>-</button>
            <Input 
              id={input.name} 
              name={input.name} 
              onChange={onChange}  
              value={input.quantity}>
            </Input>
            <button className="btn btn-primary m-2" onClick={(e) => handleButton('+',input.name)}>+</button>
            <button className="btn btn-warning" onClick={(e) => setState(true)}>Info</button>
            {/*Muestra la informacion cuando se preciona sobre el btn de info, envio datos con props al componwente Info  */}
            <Info 
              info={input.info}
              open={state}
              close = {(e)=> setState(false)}
            >
            </Info>
          </div>
          
        )
      }
    </div>
  )
}
export default ComponentPanel;