import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <header>
            <HeaderLogo />
            <HeaderForm />
            <HeaderBanner />
        </header>
    )
}

export default Header;