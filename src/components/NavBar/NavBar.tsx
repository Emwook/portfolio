import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';
import clsx from 'clsx';

const NavBar = () =>{
    //on select change the color to show which page the user's on
    return (
        <Navbar expand="lg" className={clsx("bg-light text-dark lead h1 px-4 my-3 d-flex justify-content-between", styles.navbar)}>
            <Navbar.Brand className={styles.logo}>Emilia Łukasiuk</Navbar.Brand>
            <Row>
                <Col>
                    <Navbar.Brand>
                        <NavLink to="/" className={styles.link}>Home</NavLink>
                    </Navbar.Brand>
                </Col>
                <Col>
                    <Navbar.Brand>
                        <NavLink to="/projects" className={styles.link}>Projects</NavLink>
                    </Navbar.Brand>
                </Col>
                <Col>
                    <Navbar.Brand>
                        <NavLink to="/contact" className={styles.link}>Contact</NavLink>
                    </Navbar.Brand>
                </Col>
            </Row>
        </Navbar>
    );
}

export default NavBar;