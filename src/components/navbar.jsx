import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <main className="h-screen w-screen bg-gray-50">
    <Outlet />
    <nav className="absolute bottom-0 bg-blue-500 flex justify-center items-center pt-5">
        <ul className="flex w-screen justify-center space-x-20 mb-5 text-20 text-white">
            <li>
                <NavLink to="/Home" className="home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Upload" className="text-black text-25"><FontAwesomeIcon icon= {faPlusCircle} /></NavLink>
            </li>
            <li>
                <NavLink to="/My-page" className="my-page">Account</NavLink>
            </li>
        </ul>
    </nav>
    </main>
  )
}

export default Navbar