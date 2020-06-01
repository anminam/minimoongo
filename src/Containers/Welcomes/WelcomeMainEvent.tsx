import React, { useState, useEffect } from 'react';
import { IEventListItem } from 'Interfaces/IEventList';
import Slider from 'Components/Slider';
import { Utils } from 'Core/Utils';

interface IWelcomeMainEvent {
    list:IEventListItem[]
}

const WelcomeMainEvent = (props:IWelcomeMainEvent) => {

    const [list] = useState<IEventListItem[]>(props.list);
    const [item, setItem] = useState<IEventListItem>(props.list[0]);
    const [selectIndex, setSelectIndex] = useState<number>(0);

    useEffect(()=> {
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

    const handlePrevItem = () => {
        prevItem();
    }

    const handleNextItem = () => {
        nextItem();
    }

    const prevItem = () => {
        const index = Utils.findIndex(list, item.id);
        const nextIndex = Utils.prevIndex(list, index);
        setItem(list[nextIndex]);
    }

    const nextItem = () => {
        const index = Utils.findIndex(list, item.id);
        const nextIndex = Utils.nextIndex(list, index);
        setItem(list[nextIndex]);
    }

    return(
        <div className="webcome_main_evnet_height">
            <Slider list={item.list} onNextItem={handleNextItem} onPrevItem={handlePrevItem}/>
            <ul className="item-list">
            {
                list &&
                list.map((pItem) => {
                    return (
                        <li key={pItem.id} >
                            <button type='button' id={pItem.id} className={`${pItem.id === item.id ? 'on' : ''} `} onMouseOver={
                                handleMouseOver
                            }>
                                {pItem.displayName}
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