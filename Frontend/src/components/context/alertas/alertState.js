import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import { SHOW_ALERT, HIDE_ALERT } from '../../../types';

const AlertState = props =>{

const inicialState = {
    alertMsg:null,
    typeAlert: null
    
}

const [state, dispatch] = useReducer( alertReducer, inicialState );

const showAlert = ( typeAlert, msg)=>{
    dispatch({
        type:SHOW_ALERT,
        payload: {
            msg,
            typeAlert
        }
    });

    setTimeout(()=>{
        dispatch({
            type:HIDE_ALERT
        });
    }, 3000)

}

return(
    <alertContext.Provider
        value={{
            alertMsg:state.alertMsg,
            typeAlert:state.typeAlert,
            showAlert
        }}
    >
        {props.children}
    </alertContext.Provider>
)
}

export default AlertState;