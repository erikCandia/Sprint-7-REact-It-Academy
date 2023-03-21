import { React, useState } from "react";
import Formulario from "./components/Formulario";

//declaro el formateo del precio total del presupuesto
const getFormattedPrice = (price) => `€${price.toFixed(2)}`;
function App() {
  //Declaro un array con los servicios q ofrece la web
  let toppings = [
    {
      name: "Una pagina web (500€)",
      price: 500
    },
    {
      name: "Una consultoria SEO (300€)",
      price: 300
    },
    {
      name: "Una campaña de google Ads (200€)",
      price: 200
    },
  ];
  //usando useState, uso el array de productos, el estado inicial del chckedState sera un array con 3 valores en FALSE
  //Para q cuando el usuario presione sobre un checkbox, cambie el valor de false por true y visceversa
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false) //declaro un estado inicial igual al array con los valores en false
  );
  //Para sumar el precio, si esta marcado el checkbox
  const [total, setTotal] = useState(0);

  //
  let [panell, setPanell] = useState(true);//pagInicial-Estado inicial de la variable = true

  //Implementamos la funcion del onChange
  //recorro del array checkedState, con map, si el valor de position pasado por la funciones igual al index de turno
  //modifico su valor a TRUE o FALSE, segun sea el caso, si el index no es igual a la posicion, no invertimos el valor
  const handleOnChange = (position) => {
    console.log(position)//imprime la posicion del checkbox q se presiona
    const updatedCheckedState = checkedState.map((item, index) => //creo otro array actualizando el checkedState  
    index === position ? !item : item //si parametro position == index TRUE si position != index FALSE
    );
    //pasamos el array q se obtiene recorriendo el array checkedState
    setCheckedState(updatedCheckedState);
    //usamos reduce para calcular el precio total, recibe 4 parametros, usamos sum, currentState e index
    //tbn pasamos 0, como valor inicial o acumulador del precio total,con reduce vemos si el valor actual 
    //del array updateCheckedState es TRUE o no, si es TRUE el checkbox esta marcado y recogemos el precio de ese objeto 
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;//sumamos el precio si esta marcado el chekbox, si no se mantiene el precio anterior
        }
        return sum;
      },0);

      setTotal(totalPrice);//aqui asignamos el precio total
  }
  return (
    <div className="container">
      <div className="App">
        <h3>Presupuesto</h3>
        <p>Que quieres hacer ?</p>
        <ul>
          {
            toppings.map(({ name, price }, index) => {
              return (
                <div key={index}>
                  {/* El input tiene el checked segun el valor true o false */}
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label>&nbsp;{name}{index}</label>
                  <div>
                    {!panell && 
                      <p>HOla</p>
                    }
                  </div>
                </div>
              );
            })
          }
          <div>
            <div>
              <div>Total:</div>
              <div>{getFormattedPrice(total)}</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default App;
