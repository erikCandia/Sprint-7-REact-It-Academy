import { React, useState, useEffect } from "react";
import { data, webOptions } from "../data";
import ComponentPanel from "../Panel/Panel";

//declaro el formateo del precio total del presupuesto
const getFormattedPrice = (price) => `€${price.toFixed(2)}`;
function Presupuesto() {

  const [webFormData, setWebFormData] = useState(webOptions);

  //usando useState, uso el array de productos, el estado inicial del chckedState sera un array con 3 valores en FALSE
  //Para q cuando el usuario presione sobre un checkbox, cambie el valor de false por true y visceversa
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false) //declaro un estado inicial igual al array con los valores en false
  );
  //Para sumar el precio, si esta marcado el checkbox
  const [total, setTotal] = useState(0);
  //Para sumar el numero de paginas y el numero de idiomas
  const [sumTotal, setSumTotal] = useState(0)
  //Para mostrar el panell
  const[panell, setPanell] = useState(false);

  //usando useEffect para mostrar u ocultar el panel de webOptions
  useEffect(() => {
      console.log(checkedState); //omprobando que devuelve true, cuando cambia el estado
      checkedState[0] === true ? setPanell(true) : setPanell(false)
    })

  //Implementamos la funcion del onChange
  //recorro del array checkedState, con map, si el valor de position pasado por la funciones igual al index de turno
  //modifico su valor a TRUE o FALSE, segun sea el caso, si el index no es igual a la posicion, no invertimos el valor
  const handleOnChange = (position, panell) => {
    
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
          //console.log(currentState +" "+ index)
          return sum + data[index].price;//sumamos el precio si esta marcado el chekbox, si no se mantiene el precio anterior
        }
        return sum;
      },0);//le damos como valor inicial 0

      setTotal(totalPrice);//aqui asignamos el precio total

      //console.log(position)//imprime la posicion del checkbox q se presiona
    }

    //funcion para sumar el numero de paginas y el numero de idiomas
    function handleButton (type, name) {
      console.log(type) //el signo q tiene el input(+ o -)
      console.log(name) //el nombre que tiene el input(num de paginas)
      setWebFormData(prevFormData => {
        console.log(prevFormData)//Array de objetos q muestra el numpaginas y numidiomas
        const newFormData = [] //Declaro un array vacio
        for (let i = 0; i < prevFormData.length; i++) {
          const currentInput = prevFormData[i] //el array de datos de inputs de numPaginas y numIdiomas
          console.log(currentInput.name) //VErifico que llega el nombre del array 
          if (currentInput.name === name) { 
            if (type==='-'){
              console.log(type)
              const updatedInput = {
                ...currentInput,
                quantity: parseInt(currentInput.quantity)-1,
              }
              console.log(updatedInput)//Muestra el array con -1
              newFormData.push(updatedInput)
              console.log(newFormData)
            } else {
              console.log(type)
              const updatedInput = {
                ...currentInput,
                quantity: parseInt(currentInput.quantity)+1,
              }
              console.log(updatedInput);
              newFormData.push(updatedInput)
            }
          } else {
            newFormData.push(currentInput)
          }
        }
        return newFormData
      })
    }
    useEffect(()=>{
      let sumTotal = 0;
      data.forEach((item) => {
        if (item.selected) sumTotal += item.price
      })
      webFormData.forEach((item) => {
        let amount = item.quantity * item.priceUnity
        sumTotal += amount
      })
      setSumTotal(sumTotal)
    }, [data, webFormData]);
  return (
    <div className="container shadow p-5 mt-5">
      <div className="presupuesto">
        <h3 className="text-center">Calcula tu presupuesto</h3>
        <h5 className="m-3">Que quieres hacer ?</h5>
        <ul>
          {
            data.map(({ name, price }, index) => {
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
                  <label>&nbsp;{name}</label>
                  {/* Se mostrar u ocultara el panel con numPaginas o numIdiomas */}
                  {index === 0 && panell &&
                    <div>
                      <ComponentPanel webOptions={webOptions} onChange={handleOnChange} handleButton={handleButton}></ComponentPanel>
                    </div> 
                  }
                </div>
              );
            })
          }
          <div>
            <div className="m-3">
              <div>Total:</div>
              <div>{getFormattedPrice(total+sumTotal)}</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Presupuesto;