import {Link} from 'react-router-dom'

const FrontPage = () =>{
  return(
    <div className='container bg-ligth pt-5 mt-5 shadow-lg'>
      <h1 className='text-center text-secondary'>Bienvenidos</h1>
      <h2 className='text-center text-secondary'>Obten el presupuesto de tu proyecto</h2>
      <div className='text-center p-5 text-danger'>
        <Link to={'/presupuesto'}>Calcular mi presupuesto</Link>
      </div>
    </div>
  )
}
export default FrontPage;