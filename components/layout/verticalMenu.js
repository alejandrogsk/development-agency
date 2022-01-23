import React from 'react';
import Link from 'next/link';

const VerticalMenu = ({open, menuHandler}) => {
    return (
        <nav className={`vertical__menu ${ open ? 'show-menu' : '' }`} onClick={menuHandler} onWheel={menuHandler}>
            <ul onClick={menuHandler}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/ecommerce">Ecommerce</Link></li>
                <li><Link href="/ecommerce">Desarrollo Web</Link></li>
                <li><Link href="/ecommerce">Marketing Digital</Link></li>
            </ul>
        </nav>
    )
}

export default VerticalMenu
