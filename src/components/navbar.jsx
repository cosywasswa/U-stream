import React from 'react'
import { NavLink } from 'react-router-dom'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/" className="home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Upload" className="upload"><FontAwesomeIcon icon= {faPlusCircle} /></NavLink>
            </li>
            <li>
                <NavLink to="/My-page" className="my-page">Account</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar