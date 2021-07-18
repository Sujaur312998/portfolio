import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import img from '../image/suja.png'
import axios from 'axios'

const Navs = () => {
    const [toggle, setToggle] = useState();

    const Toggle = () => {
        console.log(toggle);
        if (toggle) {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                </li>
            )
        } else {
            return <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Signin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registration">Registration</NavLink>
                </li>
            </>

        }

    }




    return (
        <nav className="navbar navbar-expand-md navbar-light " style={{ backgroundColor: "#e6ffee" }}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={img} alt="Logo" style={{ width: "100px" }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutme">AboutMe</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Signin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registration">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                        {/* < Toggle /> */ }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navs