import React, { useState, useEffect } from 'react';
import { IEventListItem } from 'Interfaces/IEventList';
import { ILink } from 'Interfaces/ILink';
import Slider from 'Components/Slider';

interface IWelcomeMainEventViewer {
    item?: IEventListItem
    initIndex?: number
}

const WelcomeMainEventViewer = (props:IWelcomeMainEventViewer) => {

    const [item, setItem] = useState<IEventListItem>();
    const [subList, setSubList] = useState<ILink[] | null>(null);

    useEffect(()=> {
        setItem(props.item);
        // const {list} = props.item;
        if(props.item) {
            setSubList(props.item.list);
        }
        
    }, [props.item] );

    // const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const target = event.target as Element
    //     const {id} = target;

    //     const obj = list?.find(item => item.id === id);
    //     if(obj) {
    //         setItem(obj);
    //     }
    // }

    const handlePrevItem = () => {

    }

    const handleNextItem = () => {

    }

    return (
        <div className="welcome-main-event-viewer-container">
            {
                subList &&
                <Slider list={subList} onNextItem={handleNextItem} onPrevItem={handlePrevItem}/>
            }
        </div>
    )
}

export default WelcomeMainEventViewer;