import React, { useState } from 'react';
import AllCategory from './AllCategory';
import { ILink } from '../Interfaces/ILink';
import { INavItem } from '../Interfaces/INavItem';
import { Link } from 'react-router-dom';


interface IHeaderNav {
    list:INavItem[]
}

const HeaderNav = ({list}:IHeaderNav) => {
    const [navlist, setNavList] = useState<INavItem[]>(list);

    return (
        <ul className="header__navbar">
            {
                list && 
                navlist.map((item => {
                    return (
                        <li>
                            <Link to={item.href}>
                                <span>{item.displayName}</span>
                            </Link>
                        </li>
                    )
                }))
            }
        </ul>
    )
}

export default HeaderNav;