import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='navigationList'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Accueil</li>
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Profil</li>
                </NavLink>
                <NavLink to="/matches" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Matches</li>
                </NavLink>
                <NavLink to="/stats" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='navigationListLink'>Stats</li>
                </NavLink>
                <li className="navigationButton">
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default Navigation;