import React, { useState } from 'react';

const TopADContainer = () => {

    const [isOn, setIsOn] = useState<boolean>(true);

    const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        setIsOn(false);
    }

    return (
        <div id="container-top-ad" className={" " + (isOn ? 'on' : '')}>
            <div className="script">광고에요</div>
            <button type="button" className="close-button" onClick={handleCloseClick}>닫기</button>
        </div>
    )
}

export default TopADContainer;