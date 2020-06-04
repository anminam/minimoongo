import React from 'react';
import Welcome1 from 'Containers/Welcomes/Welcome1';
import BoxWelcome1 from 'View/Containers/Boxes/BoxWelcome1';
import { connect } from 'react-redux';
import { IGoods } from 'Interfaces/IGoods';

interface IHome {
    event1: IGoods[]
}
const Home = ({ event1 }:IHome) => {
    const obj1 = {
        title: '화재의 신간',
        href: '/',
        list: event1
    }

    return (
        <div>
            <Welcome1 />
            <BoxWelcome1 {...obj1} />
        </div>
    )
}


const mapSstateToProps = (state:any, props:any) => {
    const {bookList} = state.goods;

    return {
        event1: bookList
    }
}

export default connect(mapSstateToProps)(Home);