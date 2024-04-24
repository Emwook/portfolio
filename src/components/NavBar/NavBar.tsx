import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import clsx from 'clsx';

const NavBar = () =>{
    //on select change the color to show which page the user's on
    return (
        <Navbar expand="lg" className={clsx("bg-secondary bg-opacity-25 text-dark lead h1 px-4 mb-4 d-flex justify-content-between", styles.navbar)}>
            <Navbar.Brand className={styles.logo}>Emilia Łukasiuk</Navbar.Brand>
            <div>
            <Navbar.Brand>
                <NavLink to="/" className={styles.link}>Home</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/projects" className={styles.link}>Projects</NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
                <NavLink to="/contact" className={styles.link}>Contact</NavLink>
            </Navbar.Brand>
            </div>
        </Navbar>
    );
}

export default NavBar;