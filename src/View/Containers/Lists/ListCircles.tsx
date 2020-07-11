import React from "react";
import { ILink } from "Interfaces/ILink";
import { Link } from "react-router-dom";

interface IListCircles {
  list: ILink[];
  row?: number;
  col?: number;
}

const ListCircles = ({ list, row, col }: IListCircles) => {
  return (
    <div className="list-container circles">
      <ul>
        {list &&
          list.map((item, i) => {
            return (
              <li key={i}>
                <Link to={"/"}>
                  <div className="image-wapper">
                    <img src={item.src} alt={item.displayName} />
                    <div className="category-wapper">
                      <div className="text">{item.subCategoryText}</div>
                    </div>
                  </div>
                  <h3 className="title">{item.displayName}</h3>
                  <p className="summary-text">{item.summaryText}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListCircles;
