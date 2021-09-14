import { 
    LOGIN_EXITOSO,
        CERRAR_SESION
} from '../../../types';

export default (state, action) => {
    switch(action.type) {
        case LOGIN_EXITOSO:
            return {
                ...state,
                isAdmin: action.payload.admin,
                usuario: action.payload,
                nombre: action.payload.nombre + " " + action.payload.apellido,
                autenticado: true,
                mensaje: null
            }
        
        case CERRAR_SESION:
            return {
                ...state,
                usuario: null,
                autenticado: null,
                mensaje: action.payload, 
            }
        default:
            return state;
    }
}