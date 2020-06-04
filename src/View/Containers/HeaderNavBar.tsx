import React from 'react';
import AllCategory from '../../Components/AllCategory';
import HeaderNav from '../../Components/HeaderNav';
import { IMainCategory } from "Interfaces/IMainCategory";
import { connect } from 'react-redux';

interface IHaderNavBar {
    list: IMainCategory[]
}

const HeaderNavBar = ({list}:IHaderNavBar) => {
    return (
        <div className="header__navbar">
            <AllCategory list={list} />
            <HeaderNav list={list} />
        </div>
    )
}

const mapStateToProps = (state: any, props: any) => {
    const {list} = state.nav;

    return {
        list
    }
}

export default connect(mapStateToProps)(HeaderNavBar);