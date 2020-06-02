import React from 'react';
import AllCategory from '../Components/AllCategory';
import HeaderNav from '../Components/HeaderNav';
import { navItemList } from 'Core/StaticData';



const HeaderNavBar = () => {
    const list = navItemList;

    return (
        <div className="header__navbar">
            <AllCategory list={list} />
            <HeaderNav list={list} />
        </div>
    )
}

export default HeaderNavBar;