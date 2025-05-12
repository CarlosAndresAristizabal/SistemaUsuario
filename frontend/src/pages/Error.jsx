import {
    useEffect,
    useState
} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Error.css';


export default function Error() {

   const [countdown, setCountdown] = useState(10);
   const navigate =   useNavigate();
  useEffect(() => {
    const redirectTimer  = setTimeout(() => {
      navigate('/');
    }, 10000);

const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

  return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-animation">
          <span className="digit">4</span>
          <span className="digit">0</span>
          <span className="digit">4</span>
        </div>
        <h1 className="title">Página no encontrada</h1>
        <p className="message">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <p className="redirect-message">
          Serás redirigido automáticamente a la página de inicio en <span className="countdown">{countdown}</span>  segundos...
        </p>
        <button className="home-button" onClick={() => navigate('/')}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );}


