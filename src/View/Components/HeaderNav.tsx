import React, { useState } from "react";
import { INavItem } from "../../Interfaces/INavItem";
import { NavLink } from "react-router-dom";

interface IHeaderNav {
  list: INavItem[];
}

const HeaderNav = ({ list }: IHeaderNav) => {
  const [navlist] = useState<INavItem[]>(list);

  const activeStyle = {
    background: "#373f64",
  };

  return (
    <ul className="header__navbar__nav">
      {list &&
        navlist.map((item) => {
          const href = item.href || "/";
          return (
            <li key={item.id}>
              <NavLink to={href} activeStyle={activeStyle}>
                <span>{item.displayName}</span>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default HeaderNav;
