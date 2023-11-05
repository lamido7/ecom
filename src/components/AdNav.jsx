import React from 'react'
import { NavLink } from 'react-router-dom'



const AdNav = () => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> MyShop Admin</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/adminHome">DashBoard </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Orders">Orders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/AddProduct">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/AdminLogin" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Logout</NavLink>
                       
                    </div>
                   
                </div>


            </div>
        </nav>
    )
}

export default AdNav