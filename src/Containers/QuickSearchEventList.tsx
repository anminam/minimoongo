import React, { useState, EventHandler, MouseEvent } from 'react';
import { ILink } from '../Interfaces/ILink';

const dummy:ILink[] = [
    {
        id:'a',
        displayName: '프로그램 완전정복',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: 'js 완전 잘하기',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: '김재성 신작',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: '삼성화재 이대로괜찮은가',
        href: 'http://www.naver.com'
    },
    {
        id:'ab',
        displayName: '똑똑한사람의 선택',
        href: 'http://www.naver.com'
    },
]

const QuickSearchEventList = () => {
    const maxLength = 4;

    const [list, setList] = useState<ILink[]>(dummy);
    const [nowNum, setNowNum]= useState<number>(0);

    const handlePrevClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>):void => {
        event.preventDefault();

        if (nowNum > 0) {
            setNowNum(nowNum - 1);
        } else {
            const max = Math.floor(list.length / maxLength);
            setNowNum(max);
        }
        
    }
    const handleNextClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>):void => {
        event.preventDefault();

        const max = Math.floor(list.length / maxLength);
        if (nowNum < max) {
            setNowNum(nowNum + 1);
        } else {
            setNowNum(0);
        }
    }
    
    return (
        <div className="container-quick-search">
            <ul className="container-quick-search__list">
                {
                    list && list.map(( item, i ) => {
                        const min = nowNum * maxLength;
                        const max = min + maxLength;

                        if(!(min <= i && i < max)) {
                            return false;
                        }
                        return (
                            <li key={item.id}>
                                <a href={item.href}>
                                    {item.displayName}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="container-quick-search__buttons">
                <button className="prev" onClick={handlePrevClick}>-</button>
                <button className="next" onClick={handleNextClick}>+</button>
            </div>
        </div>
    )
}

export default QuickSearchEventList;