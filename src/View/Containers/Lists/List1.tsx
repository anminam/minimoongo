import React from 'react';
import { IGoods, TGoods } from 'Interfaces/IGoods';
import GoodsCard1 from '../Cards/GoodsCard1';

interface IList1 {
    goods: TGoods[]
}

const List1 = ({ goods }:IList1) => {
    return (
        <div className="list-container">
            <ul>
                {
                    goods &&
                    goods.map((item, i) => {
                        return (
                            <li key={i} >
                                <GoodsCard1 {...item}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List1;