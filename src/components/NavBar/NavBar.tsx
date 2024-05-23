import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import clsx from 'clsx';

const NavBar: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const handleToggle = () => setExpanded(prevExpanded => !prevExpanded);
    const handleClose = () => setExpanded(false);

    return (
        <Navbar expand="md" className={clsx("bg-light lead px-4 my-3", styles.navbar)} expanded={expanded}>
            <Navbar.Brand className={styles.logo}>Emilia Łukasiuk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className={styles.toggler} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink 
                        to="/" 
                        className={({ isActive }: { isActive: boolean }) => isActive 
                            ? `${styles.link} ${styles.activeLink}` 
                            : styles.link
                        }
                        onClick={handleClose}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }: { isActive: boolean }) => isActive 
                            ? `${styles.link} ${styles.activeLink}` 
                            : styles.link
                        }
                        onClick={handleClose}
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }: { isActive: boolean }) => isActive 
                            ? `${styles.link} ${styles.activeLink}` 
                            : styles.link
                        }
                        onClick={handleClose}
                    >
                        Contact
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
