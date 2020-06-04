import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderForm from './HeaderForm';
import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';

const Header = () => {
    return (
        <header id="container_header" className="container_lg">
            <div className="first_line">
                <HeaderLogo />
                <HeaderBanner />
                <HeaderForm />
            </div>
            <HeaderNavBar />
        </header>
    )
}

export default Header;