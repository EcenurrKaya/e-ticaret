import React from 'react'
import styles from "./style.module.css"
import {Link} from 'react-router-dom'
import {Button} from "@chakra-ui/react"

function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className='logo'>
                <Link to="/">eCommerce</Link>
            </div>

            <ul className={styles.menu}>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>
        </div>
        <div className={styles.right}>
            <Link to="/signin">
                <Button colorScheme='blue'>Login</Button>
            </Link>
            <Link to="/signup">
                <Button colorScheme='blue'>Register</Button>
            </Link>
        </div>
    </nav>
  )
} 

export default Navbar