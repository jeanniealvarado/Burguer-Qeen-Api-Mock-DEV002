import '../components/Waitress.css';
import logoRest from '../images/logoRest.png';

function Waittres() {

  return (
    <>
    <main>
       <section className='section-logo-options'>
         <div className='div-logo'>
           <img src={logoRest} className='logo-options'></img>
         </div>
         <div className='button-food'>
          <button className='breakfast'>Desayuno</button>
          <button className='dinner'>Cena</button>
         </div>
       </section>
       <section className='client-name'>
        <p>Cliente</p>
        <input type={Text} className= 'client' required ></input>
       </section>
       <section className='Orders-waitress'>
        <table className='table-orders'>
          <tr>
            <td>Alimentos</td>
            <td>Bebidas</td>
            <td>Orden</td>
          </tr>
        </table>
       </section>
       
       </main>
   </>
  )
}

export default Waittres