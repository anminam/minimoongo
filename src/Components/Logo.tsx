import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const src = 'assets/images/minilogo.png';

    return (
        <>
            <Link to='/'>
                <img src={src} alt="미니문고 로고" className="header__logo__img"/>
            </Link>
        </>
    )
}

export default Logo;