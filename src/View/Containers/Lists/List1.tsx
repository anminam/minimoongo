import React, { useState, useEffect } from "react";
import { TGoods } from "Interfaces/IGoods";
import GoodsCard1 from "../Cards/GoodsCard1";

interface IList1 {
  goods: TGoods[];
}

const List1 = ({ goods }: IList1) => {
  const maxLength = 4;
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
      const max = Math.floor(goods.length / maxLength);
      setViewIndex(max - 1);
    }
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    const max = Math.floor(goods.length / maxLength);
    if (viewIndex < max - 1) {
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
            const min = viewIndex * maxLength;
            const max = min + maxLength;

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
