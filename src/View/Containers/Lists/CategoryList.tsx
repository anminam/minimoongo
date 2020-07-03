import React, { useState, useEffect } from "react";
import { TGoods } from "Interfaces/IGoods";
import { Utils } from "Core/Utils";

import { IEventPicks } from "Interfaces/IEventList";
import GoodsCardPicks from "../Cards/GoodsCardPicks";
import GoodsCardNormal from "../Cards/GoodsCardNormal";
import { ILink } from "Interfaces/ILink";
import CategoryListCard from "../Cards/CategoryListCard";

interface ICategoryList {
  list: ILink[];
  maxLength?: number;
}

const CategoryList = ({ list, maxLength }: ICategoryList) => {
  const itemLen = maxLength || 4;
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);
  const [isViewButton, setIsViewButton] = useState<Boolean>(false);

  useEffect(() => {
    setViewIndex(0);
    const max = Utils.getListMaxLength(list.length, itemLen);
    if (max > 0) {
      setIsViewButton(true);
    }
  }, [list, itemLen]);

  const handlePrevClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    if (viewIndex > 0) {
      setViewIndex(viewIndex - 1);
    } else {
      const max = Utils.getListMaxLength(list.length, itemLen);
      setViewIndex(max);
    }
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    const max = Utils.getListMaxLength(list.length, itemLen);

    if (viewIndex < max) {
      setViewIndex(viewIndex + 1);
    } else {
      setViewIndex(0);
    }
  };

  const handleViewMouseOver = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsVisibleButton(true);
  };
  const handleViewMouseLeave = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsVisibleButton(false);
  };

  return (
    <div
      className="category-list"
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
    >
      <ul>
        {list &&
          list.map((item, i) => {
            const min = viewIndex * itemLen;
            const max = min + itemLen;

            if (!(min <= i && i < max)) {
              return false;
            }
            return (
              <li key={i}>
                <CategoryListCard {...item} />
              </li>
            );
          })}
      </ul>
      {isViewButton && (
        <>
          <button
            className={`prev ${
              !isVisibleButton ? "invisible" : ""
            } img-button-chevron-left`}
            onClick={handlePrevClick}
          ></button>
          <button
            className={`next ${
              !isVisibleButton ? "invisible" : ""
            } img-button-chevron-right`}
            onClick={handleNextClick}
          ></button>
        </>
      )}
    </div>
  );
};

export default CategoryList;
