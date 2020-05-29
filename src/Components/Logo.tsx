import React from 'react';

const Logo = () => {
    const src = 'assets/images/minilogo.png';

    return (
        <>
            <img src={src} alt="미니문고 로고" className="header__logo__img"/>
        </>
    )
}

export default Logo;