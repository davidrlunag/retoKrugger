import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const Sidebar = () => {
    const authContext = useContext(AuthContext);
    const { isAdmin } = authContext;
    return ( 
        <aside>
            <h1>Kruger<span>Admin</span></h1>
            <div className="proyectos">
            <div className="listado-proyectos">
                {isAdmin &&
                <ul>
                <Link to={"./usuarios"}>
                    <li>Usuarios</li>
                </Link>
                </ul>}
                {!isAdmin &&
                <ul>
                <Link to={"./perfil"}>
                    <li>Mi Perfil</li>
                </Link>
                </ul>}
                </div>
            </div>
        </aside>
     );
}
 
export default Sidebar;