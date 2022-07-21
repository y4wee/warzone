import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Profil</li>
                </NavLink>
                <NavLink to="/matches">
                    <li>Matches</li>
                </NavLink>
                <NavLink to="/stats">
                    <li>Stats</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;