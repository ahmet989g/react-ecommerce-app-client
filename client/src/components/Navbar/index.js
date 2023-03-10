import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from '@chakra-ui/react'

import styles from './styles.module.css';

import { useAuth } from "../../contexts/AuthContext";

function Navbar(){
    const { loggedIn } = useAuth();

    return(
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Anasayfa</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                {!loggedIn && (
                    <React.Fragment>
                        <Stack spacing={4} direction='row' align='center'>
                            <Link to="/signup">
                                <Button colorScheme='purple'>Register</Button>
                            </Link>
                            <Link to="/signin">
                                <Button colorScheme='pink'>Login</Button>
                            </Link>
                        </Stack>
                    </React.Fragment>
                )}
                {loggedIn && (
                    <React.Fragment>
                        <Stack spacing={4} direction='row' align='center'>
                            <Link to="/profile">
                                <Button colorScheme='purple'>Profile</Button>
                            </Link>
                        </Stack>
                    </React.Fragment>
                )}
            </div>
        </nav>
    )
}

export default Navbar;