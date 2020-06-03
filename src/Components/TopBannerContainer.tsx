import React, { useState } from 'react';

const TopBannerContainer = () => {

    const src = 'assets/images/top-banner.png';
    const [isOn, setIsOn] = useState<boolean>(true);

    const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        setIsOn(false);
    }

    return (
        <div id="container-top-banner" className={" " + (isOn ? 'on' : '')}>
            <div className="background">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <img className="container-top-banner__img" src={src} alt="광고맨" style={{height: '65px'}}/>
            <button type="button" className="close-button" onClick={handleCloseClick}></button>
        </div>
    )
}

export default TopBannerContainer;