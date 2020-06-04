import React from 'react';
import { IGoods } from 'Interfaces/IGoods';
import { NavUtils } from 'Core/nav/utils';

const GoodsCard1 = ({ name, categoryId, img }:IGoods) => {

    const categoryName = NavUtils.getCategoryName(categoryId);
    
    return(
        <div className="card">
            <div className="card__cover">
            {
                img &&
                <img src={img} alt={name}/>
            }
            </div>
            <div className="card__contents">
                <p className="card__contents__category">[{categoryName}]</p>
                <p className="card__contents__title">
                    <a href="/">{name}</a>
                </p>
            </div>
        </div>
    )
}

export default GoodsCard1;