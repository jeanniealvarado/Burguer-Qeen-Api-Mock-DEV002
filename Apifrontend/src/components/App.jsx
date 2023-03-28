import './App.css'
import logoRest from '../images/logoRest.png';
import { useNavigate } from "react-router-dom"
import react, { useEffect, useState } from 'react';
import { setUserSession } from '../loginauth';

function App() {
  const [userEmail, setUserEmail] = useState ('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState (null);
  const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const clickLogin = (e) => {
  e.preventDefault()
  setLoading(true)
       fetch ('http://localhost:8080/login', {
         method:'POST',
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify({ 
          email: userEmail,
          password: password
         }),
       }) 
       .then (response => response.json())
       .then (data => {
        setLoading(false)
        setUserSession(data.accessToken, data.user)
        console.log(data)
        console.log(data.accessToken)
        navigate('/Options')
        })
       .catch ((error)=>{
        setLoading(false)
       setError(error + 'Error al iniciar sesión. Por favor, revisa tus credenciales e intenta nuevamente.')
        })
}
    return (
      <>
      
        <main>
          <section className='section-logo'>
            <div className='div-logo'>
              <img src={logoRest} className='logo-rest'></img>
            </div>
          </section>
          <section className='section-login'>
            <div className='div-login'>
              <h2>Bienvenido</h2>
            </div>
    
              <p>Email</p>
              <input type='email' id='text-id' value={userEmail} name='username'
               onChange={(e) => setUserEmail(e.target.value)}>
               </input>
              <p>Password</p>
              <input type='password' id='text-password' value={password} name='password'
              onChange={(e) => setPassword(e.target.value)}></input>
              <button className='login' onClick={clickLogin}>Login</button>
              
          </section>
        </main>
      </>
    );
}

export default App
