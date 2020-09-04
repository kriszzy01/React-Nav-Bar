import React from "react";

export const NavBar = ({ mobileMenu }) => {
    const navItems = ["Home", "Services", "About", "Contact"];

    return (
        <nav className={mobileMenu ? "mobileNav" : "desktopNav"}>
            <ul>
                {navItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </nav>
    );
};