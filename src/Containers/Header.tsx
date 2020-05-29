import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <header id="container_header" className="container_lg">
            <HeaderLogo />
            <HeaderBanner />
            <HeaderForm />
        </header>
    )
}

export default Header;