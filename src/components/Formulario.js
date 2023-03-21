import React from "react";
import { Fragment, useState } from "react";

const Formulario = () =>   {
  //declaramos un useState, para cambiar el estado y lo declaramos con un array 
  const[checkedState, setCheckedState] = useState([]) //declaramos un array vacio en useState
  const[isChecked, setIsChecked] = useState( true);//Comporbar si esta marcado o no el checkbox

  const [total, setTotal] = useState(0);
  //Implementando la funcion del onchange
  const handleInputChange = (position) =>{
    setIsChecked(!isChecked) //para ver si esta marcado o no el input
    console.log(isChecked ? "true" : "false")
    if(isChecked === true){
      checkedState.push(position.target.value)
    }else{
      checkedState.pop(position.target.value)
    }
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
  }

  return(
    <Fragment>
      <h1>Presupuesto de pagina web</h1>
      <form className="row">
      <div className="checkbox-container">
        <div className="input-checkbox">
          <input 
            onChange={handleInputChange}//Estara atento al input
            type="checkbox"
            name="web"
            value={500}
            ></input>
          <label> &nbsp; Una pagina web (500€)</label>
        </div>
        <div className="input-checkbox">
          <input 
            onChange={handleInputChange}//Estara atento al input
            type="checkbox"
            name="consultoria"
            value={300}
            ></input>
          <label> &nbsp; Una consultoria SEO (300€)</label>
        </div>
        <div className="input-checkbox">
          <input 
          onChange={handleInputChange}//Estara atento al input
          type="checkbox"
          name="campanya"
          value={200}
          ></input>
          <label> &nbsp; Una campaña de google Ads (200€)</label>
        </div>
      </div>
      </form>
      <p className="text-danger">Preu:{total}</p>
    </Fragment>
  );
}

export default Formulario;