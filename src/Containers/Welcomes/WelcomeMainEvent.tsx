import React, { useState, useEffect } from 'react';
import { IEventListItem } from 'Interfaces/IEventList';
import WelcomeMainEventViewer from './WelcomeMainEventViewer';

interface IWelcomeMainEvent {
    list:IEventListItem[]
}

const WelcomeMainEvent = (props:IWelcomeMainEvent) => {

    const [list, setList] = useState<IEventListItem[]>();
    const [item, setItem] = useState<IEventListItem>();

    useEffect(()=> {
        setList(props.list);
        setItem(props.list[0]);
    }, [props.list] );

    const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = event.target as Element
        const {id} = target;

        const obj = list?.find(item => item.id === id);
        if (obj) {
            setItem(obj);
        }
    }

    return(
        <div className="webcome_main_evnet_height">
            <WelcomeMainEventViewer item={item}/>
            <ul className="item-list">
            {
                list &&
                list.map(item => {
                    return (
                        <li key={item.id} >
                            <button type='button' id={item.id} onMouseOver={
                                handleMouseOver
                            }>
                                {item.displayName}
                            </button>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}

export default WelcomeMainEvent;