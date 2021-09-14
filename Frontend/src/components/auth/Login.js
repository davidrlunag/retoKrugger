import React, {useState, useContext, useEffect} from 'react';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AlertContext from '../context/alertas/alertContext'
import AuthContext from '../context/auth/authContext';
import {validateField} from '../utils/Validate';
import {constantsPage} from '../utils/Constants'
import { Message } from 'primereact/message';


const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const { typeAlert, alertMsg, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const {  autenticado, iniciarSesion } = authContext;

    const [user, saveUser] = useState({
        username:'',
        password:''     
    });

    useEffect(() => {
        if(autenticado) {
            props.history.push('/estadisticas');
        }

        // eslint-disable-next-line
    }, [ autenticado, props.history]);

    //extraer de usuario

    const {email, password} = user;

    const onChange = (e)=>{
        console.log(user);
        saveUser({
            ...user,
            [e.target.name]:e.target.value
        })
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e =>{
        e.preventDefault();
        //Validar que no haya campos vacios
        if(!validateField(user)){
            showAlert('warn',constantsPage.genericas.errorCampos);
            return;
          }
          
          iniciarSesion(user)
        
        
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form ">
                <h1 className="p-text-center">Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit} className="p-fluid"
                >
                    {alertMsg ?(<div className = 'p-col-12'>
                         <Message severity={typeAlert} text={alertMsg}></Message>
                    </div>):null}
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <InputText
                            id='username'
                            name="username"
                            className={typeAlert==='warn'?'p-invalid' : "p-inputtext-lg p-d-block" }
                            onChange={onChange}
                            value={email}
                            placeholder="Introduzca su Username"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <InputText
                            id='password'
                            name="password"
                            type="password"
                            className={typeAlert==='warn'?'p-invalid' : "p-inputtext-lg p-d-block" }
                            onChange={onChange}
                            value={password}
                            placeholder="Tu Contraseña"
                        />
                    </div>

                    <div className="campo-form">
                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;