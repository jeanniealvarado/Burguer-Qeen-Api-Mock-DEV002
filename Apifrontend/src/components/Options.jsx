import '../components/Options.css';
import logoRest from '../images/logoRest.png';
import ordenes from '../images/ordenes.png';
import kitchen from '../images/kitchen.png'
import administrador from '../images/administrador.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { setUserSession } from '../loginauth';

function Options() {
    const navigate = useNavigate();
    useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    const getUser= JSON.parse(localStorage.getItem('user'));
    console.log(getUser)
    if (!token) {

      navigate('/Login');
    }
   
  }, []);

    const handleMeseroClick = () => {
        const getUser= JSON.parse(localStorage.getItem('user'));
            if (getUser.role === 'mesero' || getUser.role === 'admin') {
                navigate('/orders');
            }
        }
    
return (
    <>
     <main>
        <section className='section-logo-options'>
          <div className='div-logo'>
            <img src={logoRest} className='logo-options'></img>
          </div>
        </section>
        <section className='section-options'>
            <div className='buttons-options'>
                <button className='Orders' onClick={handleMeseroClick}>
                    Ordenes
                    <img src={ordenes} className='image-orders'></img>
                    </button>
                <button className='kitchen'>Cocina
                <img src={kitchen} className='image-kitchen'></img>
                </button>
                <button className='administration'>Administrador
                <img src={administrador} className='image-admin'></img>
                </button>
            </div>
        </section>
        </main>
    </>
)
}
export default Options