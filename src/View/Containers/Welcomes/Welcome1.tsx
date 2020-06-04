import React from 'react';
import WelcomeMainEvent from './WelcomeMainEvent';
import { mainEventList } from 'Core/StaticData';

const Welcome1 = () => {
    return(
        <div>
            <div className="container_lg">
                <WelcomeMainEvent list={mainEventList}/>
            </div>
        </div>
    )
}

export default Welcome1;