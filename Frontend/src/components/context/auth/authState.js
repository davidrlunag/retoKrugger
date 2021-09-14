import React, { useReducer,useContext } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {loginUser} from '../../services/loginService'
import AlertContext from '../alertas/alertContext'



import { 
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../../types';

const AuthState = props => {

    const alertContext = useContext(AlertContext);
    const {  showAlert } = alertContext;

    const initialState = {
        autenticado: null,
        usuario: null, 
        cargando: true.cargando,
        isAdmin: false,
        nombre:null   }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await loginUser(datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
        } catch (error) {
            console.log("Ocurrió un error")
            console.log(error);
            showAlert('error','No exite el usuario');
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }
    return(
        <AuthContext.Provider
            value={{
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                isAdmin: state.isAdmin,
                nombre: state.nombre,
                iniciarSesion,
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;