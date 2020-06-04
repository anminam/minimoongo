import React from 'react';
import { IGoods } from 'Interfaces/IGoods';

const GoodsCard1 = ({ name, subscript, img }:IGoods) => {
    return(
        <div className="card">
            <div className="card__cover">
            {
                img &&
                <img src={img} alt={name}/>
            }
            </div>
            <div className="card__contents">
                <p className="card__contents__category">{subscript}</p>
                <p className="card__contents__title">
                    <a href="/">{name}</a>
                </p>
            </div>
        </div>
    )
}

export default GoodsCard1;