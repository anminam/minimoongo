import React, { useState, useEffect } from "react";
import { ILink } from "Interfaces/ILink";
import { Link } from "react-router-dom";

interface IListMap {
  list: ILink[];
  row?: number;
  col?: number;
}

const ListMap = ({ list, row, col }: IListMap) => {
  return (
    <div className="list-container map">
      <ul>
        {list &&
          list.map((item, i) => {
            return (
              <li key={i}>
                <Link to={"/"}>
                  <img src={item.src} alt={item.displayName} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListMap;
