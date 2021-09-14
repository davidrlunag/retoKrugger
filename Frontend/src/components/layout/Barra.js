import React, {useContext} from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';

const Barra = () => {
    
    const authContext = useContext(AuthContext);
    const {  cerrarSesion, isAdmin, nombre  } = authContext;

    console.log(authContext);
    return ( 
        <header className="app-header" >
            <Link  >
                <p style={{color: 'white'}}>Kruger - Sistema de Prueba</p>
                <div style={{fontSize:12,color: 'white'}}>Bienvenido {nombre} {isAdmin?"Administrador":""}</div>
            </Link>
            <Link to="/">
                <button 
                    className="btn btn-blank cerrar-sesion"
                     onClick={() => cerrarSesion() }
                 >Cerrar Sesión
                </button>
            </Link>    
            
        </header>
     );
}
 
export default Barra;