import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { MobileNavBtn } from "./MobileNavBtn";

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            <header>
                <div>
                    <h1>Logo</h1>
                    <MobileNavBtn mobileMenu={mobileMenu} toggleMenu={() => setMobileMenu(!mobileMenu)} />
                </div>
                <NavBar mobileMenu={mobileMenu} toggleMenu={() => setMobileMenu(!mobileMenu)} />
            </header>
            <h1>Hello World</h1>
        </>
    );
};