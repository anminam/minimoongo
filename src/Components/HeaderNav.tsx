import React, { useState } from 'react';
import { INavItem } from '../Interfaces/INavItem';
import { Link } from 'react-router-dom';


interface IHeaderNav {
    list:INavItem[]
}

const HeaderNav = ({list}:IHeaderNav) => {
    const [navlist] = useState<INavItem[]>(list);

    return (
        <ul className="header__navbar">
            {
                list && 
                navlist.map((item => {
                    return (
                        <li>
                            <Link key={item.id} to={item.href}>
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