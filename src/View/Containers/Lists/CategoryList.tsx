import React, { useState, useEffect } from "react";
import { Utils } from "Core/Utils";
import { ILink } from "Interfaces/ILink";
import CategoryListCard from "../Cards/CategoryListCard";

interface ICategoryList {
  list: ILink[];
  itemViewLength?: number;
  indexMode?: number;
}

const CategoryList = ({ list, itemViewLength, indexMode }: ICategoryList) => {
  const itemLen = itemViewLength || 4;
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(true);
  const [isViewButton, setIsViewButton] = useState<Boolean>(false);

  useEffect(() => {
    setViewIndex(0);
    const max = Utils.getListMaxLength(list.length, itemLen);
    console.log(itemLen);
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
    setIsVisibleButton(true);
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

            if (typeof indexMode === "number") {
              if (i !== indexMode) {
                return false;
              }
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
            className={`prev img-button-chevron-left black ${
              !isVisibleButton ? "invisible" : ""
            } `}
            onClick={handlePrevClick}
          ></button>
          <button
            className={`next img-button-chevron-right black ${
              !isVisibleButton ? "invisible" : ""
            }`}
            onClick={handleNextClick}
          ></button>
        </>
      )}
    </div>
  );
};

export default CategoryList;
