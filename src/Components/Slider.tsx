import React, { useState, useEffect } from 'react';
import { ILink } from 'Interfaces/ILink';

interface ISlider {
    list: ILink[];
    onNextItem?: () => void;
    onPrevItem?: () => void;
}
const Slider = ({list, onNextItem, onPrevItem}:ISlider) => {

    const [onItem, setOnItem] = useState<ILink | null>(null);
    const [viewIndex, setViewIndex] = useState<number>(0);
    const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

    useEffect(()=> {
        setOnItem(list[0]);
        setViewIndex(0);
    }, [list]);

    const handleMouseOver = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = event.target as Element
        const {id} = target;

        const obj = list?.find((item, index) => {
            if (item.id === id) {
                setViewIndex(index);
                return true;
            }
        });

        if (obj) {
            setOnItem(obj);
        }
    }

    const handlePrevClick = () => {
        if(viewIndex === 0) {
            if (onPrevItem) {
                onPrevItem();
            }
            return;
        }
        setViewIndex(viewIndex - 1);
    }
    const handleNextClick = () => {
        if(viewIndex >= list.length - 1) {
            if (onNextItem) {
                onNextItem();
            }
            return;
        }
        setViewIndex(viewIndex + 1);

    }

    const handleViewMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsVisibleButton(true);
    }
    const handleViewMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsVisibleButton(false);
    }

    return (
        <div className="slider" onMouseOver={handleViewMouseOver} onMouseLeave={handleViewMouseLeave}>
            <div className="view-container" style={{width:700*list.length}} >
                <ul style={{'marginLeft': -(700 * viewIndex)}}>
                {
                    list &&
                    list.map((subItem)=> {
                        return (
                            <li key={subItem.id}>{subItem.displayName}</li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="dots">
                <div className="dots-wapper">
                    <ul className="bullet">
                        {
                            list && list.length > 1 &&
                            list.map((subItem, index)=> {
                                return (
                                    <li key={subItem.id} id={subItem.id} className={index === viewIndex ? 'on': ''} onMouseOver={handleMouseOver}>{subItem.displayName}</li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <button className={`prev ${!isVisibleButton ? 'invisible': ''}`} onClick={handlePrevClick}></button>
            <button className={`next ${!isVisibleButton ? 'invisible': ''}`} onClick={handleNextClick}></button>
        </div>
    )
}

export default Slider;