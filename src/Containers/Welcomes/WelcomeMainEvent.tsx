import React from 'react';
import { mainEventList } from 'Configs/StaticData';

const WelcomeMainEvent = () => {

    return(
        <div className="webcome_main_evnet_height">
            <ul className="item-list">
            {
                mainEventList &&
                mainEventList.map(item => {
                    return (
                        <li>
                            <button type='button'>
                                {item.displayName}
                            </button>
                        </li>
                    )
                })
                
            }
            </ul>
        </div>
    )
}

export default WelcomeMainEvent;