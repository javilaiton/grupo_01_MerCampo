import logo from '../assets/images/logo_d.png'
import '../assets/css/sideBar.css';
import { Link } from 'react-router-dom';




function SideBar() {
    return (
        <div className="side-bar">
            <Link to="/" className="side-bar__link">
                <img  className="side-bar__logo"src={logo} alt="Logo" />
            </Link>
            <div className= 'title'> 
            <p className='side-bar-info'>
                Información:
            </p>
            </div>
            <ul className="side-bar__list">
                        <li className='side-bar-item'>
                            <Link className='side-barlink' to="/products">
                             Productos
                            </Link>
                        </li>
                        <li className='side-bar-item'>
                            <Link className='side-barlink' to="/users">
                             Usuarios
                            </Link>
                        </li>
                        <li className='side-bar-item'>
                            <Link className='side-barlink' to="/products/last">
                                Producto Reciente
                            </Link>
                        </li>
                        <li className='side-bar-item'>
                            <Link className='side-barlink' to="/users/last">
                            Usuario Reciente
                            </Link>
                        </li>
                    </ul>
        </div>
    )
}

export default SideBar;
