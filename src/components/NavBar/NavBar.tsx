//import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const NavBar = () =>{
    //on select change the color to show which page the user's on
    return (
        <Navbar expand="lg" className="bg-secondary bg-opacity-25 text-dark lead h1 px-4 mb-2 d-flex justify-content-between">
            <Navbar.Brand>Emilia Łukasiuk</Navbar.Brand>
            <div>
            <Navbar.Brand>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</NavLink>
            </Navbar.Brand>
            </div>
        </Navbar>
    );
}

export default NavBar;