import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const logoutOnClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedWZ");
        localStorage.removeItem("dataProfil");
        localStorage.removeItem("dataMatches");
        localStorage.removeItem("dataSummary");
        window.location.href = "/";
    }

    return (
        <div className="navigation">
            <ul className='navigationList'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Profil</li>
                </NavLink>
                <NavLink to="/stats" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Stats</li>
                </NavLink>
                <li className="navigationButton" onClick={logoutOnClick}>
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default Navigation;