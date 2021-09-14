import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Barra from '../components/layout/Barra';
import HeaderPage  from '../components/layout/HeaderPage'

const Layout = ({children}) => {
    return ( 

      <div className="contenedor-app">

        <Sidebar props={children}/>

          <div className="seccion-principal">
            <Barra props={children}/>
              <main>
                  <div className="contenedor-tareas">
                      {children}
                  </div>
              </main>
          </div>
      </div>

    );
}

export default Layout;