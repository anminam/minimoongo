import React, { useState, useEffect } from "react";
import { TGoods } from "Interfaces/IGoods";
import { Utils } from "Core/Utils";
import GoodsCard1 from "../Cards/GoodsCard1";

interface IList1 {
  goods: TGoods[];
}

const List1 = ({ goods }: IList1) => {
  const itemLength = 4;
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  useEffect(() => {
    setViewIndex(0);
  }, [goods]);

  const handlePrevClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    if (viewIndex > 0) {
      setViewIndex(viewIndex - 1);
    } else {
      const max = Utils.getListMaxLength(goods.length, itemLength);
      setViewIndex(max);
    }
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    const max = Utils.getListMaxLength(goods.length, itemLength);

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
      className="list-container"
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
    >
      <ul>
        {goods &&
          goods.map((item, i) => {
            const min = viewIndex * itemLength;
            const max = min + itemLength;

            if (!(min <= i && i < max)) {
              return false;
            }
            return (
              <li key={i}>
                <GoodsCard1 {...item} />
              </li>
            );
          })}
      </ul>
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
    </div>
  );
};

export default List1;
