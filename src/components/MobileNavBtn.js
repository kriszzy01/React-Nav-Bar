import React from "react";

export const MobileNavBtn = ({ toggleMenu, mobileMenu }) => {
    return (
        <button onClick={toggleMenu}>
            <SingleBar mobileMenu={mobileMenu} />
            <SingleBar mobileMenu={mobileMenu} />
            <SingleBar mobileMenu={mobileMenu} />
        </button>
    );
};

const SingleBar = ({ mobileMenu }) => {
    return (
        <div className={mobileMenu ? "bar close" : "bar"}></div>
    )
}