import React, { useState, useEffect } from 'react';
import { IGoods, TGoods } from 'Interfaces/IGoods';
import GoodsCard1 from '../Cards/GoodsCard1';

interface IList1 {
    goods: TGoods[]
}

const List1 = ({ goods }:IList1) => {

    const maxLength = 4;
    const [viewIndex, setViewIndex] = useState<number>(0);

    useEffect(()=> {
        setViewIndex(0);
    }, [goods]);

    const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();

        if (viewIndex > 0) {
            setViewIndex(viewIndex - 1);
        } else {
            const max = Math.floor(goods.length / maxLength);
            setViewIndex(max);
        }
        
    }
    const handleNextClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();

        const max = Math.floor(goods.length / maxLength);
        if (viewIndex < max) {
            setViewIndex(viewIndex + 1);
        } else {
            setViewIndex(0);
        }
    }
    
    return (
        <div className="list-container">
            <ul>
                {
                    goods &&
                    goods.map((item, i) => {
                        const min = viewIndex * maxLength;
                        const max = min + maxLength;

                        if(!(min <= i && i < max)) {
                            return false;
                        }
                        return (
                            <li key={i}>
                                <GoodsCard1 {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
            {/* <div className="list-container__buttons"> */}
                <button className="prev" onClick={handlePrevClick}>-</button>
                <button className="next" onClick={handleNextClick}>+</button>
            {/* </div> */}
        </div>
    )
}

export default List1;