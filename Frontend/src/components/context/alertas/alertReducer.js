import {
    SHOW_ALERT, HIDE_ALERT
} from '../../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action ) =>{ 
    switch(action.type) {

        case SHOW_ALERT:
            return{
                alertMsg: action.payload.msg,
                typeAlert: action.payload.typeAlert
            }
        case HIDE_ALERT:
            return { 
                alert:null,
            }
        default:
            return state;
    }
    
 }