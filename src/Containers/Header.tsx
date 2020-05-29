import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';

const Header = () => {
    return (
        <header id="container_header" className="container_lg">
            <HeaderLogo />
            <HeaderBanner />
            <HeaderForm />
            <HeaderNavBar />
        </header>
    )
}

export default Header;