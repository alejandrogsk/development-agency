import React from "react";
import { useState } from "react";
import VerticalMenu from "./verticalMenu";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu)
    };

    return (
        <header>
            <span className="site-title">Site Title</span>

            <div className={`nav-icon ${showMenu ? 'menu-open' : ''}`} onClick={handleMenu}>
                <span></span>
                <span></span>
            </div>

            <VerticalMenu open={showMenu} menuHandler={handleMenu}/>
        </header>
    );
};

export default Header;
