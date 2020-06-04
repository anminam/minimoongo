import React from 'react';
import WelcomeMainEvent from './WelcomeMainEvent';
import { mainEventList } from 'Core/StaticData';
import WelcomeMainNavBanner from '../Banners/WelcomeMainNavBanner';

const Welcome1 = () => {
    return(
        <div>
            <div className="container_lg flex">
                <WelcomeMainEvent list={mainEventList}/>
                <WelcomeMainNavBanner />
            </div>
        </div>
    )
}

export default Welcome1;