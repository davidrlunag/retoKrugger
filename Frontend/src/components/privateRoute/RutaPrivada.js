import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const RutaPrivada = ({ component: Component, ...props  }) => {

    const authContext = useContext(AuthContext);
    const { autenticado, isAdmin } = authContext;

    
    return ( 
        <Route { ...props } render={ props => !autenticado && !isAdmin ?  (
            <Redirect to="/" />
        )  : (
            <Component {...props} />
        ) } />

     );
}
 
export default RutaPrivada;