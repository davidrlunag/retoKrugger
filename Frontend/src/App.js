import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import AlertaState from './components/context/alertas/alertState';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import AuthState from './components/context/auth/authState';
import Usuarios from './components/usuarios';
import Login from './components/auth/Login';
import Perfil from './components/Perfil';
import RutaPrivada from './components/privateRoute/RutaPrivada';

function App() {
  return (        

<AlertaState>
<AuthState>

        <Router basename="/admin">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Layout>
            <Route exact path="/perfil" component={Perfil}/>
            <RutaPrivada exact path="/usuarios" component={Usuarios}/>
            </Layout> 
          </Switch>
        </Router>
    </AuthState>
    </AlertaState>
    
    
  );
}

export default App;
