import React, { useState, useEffect } from "react";
import { TGoods } from "Interfaces/IGoods";
import { Utils } from "Core/Utils";
import GoodsCard1 from "../Cards/GoodsCard1";
import GoodsCardPicks from "../Cards/GoodsCardPicks";
import { eventPicks } from "Core/events/data";
import { IEventPicks } from "Interfaces/IEventList";

interface IListPicks {
  goods: TGoods[];
  pickItem: IEventPicks;
  itemLength?: number;
}

const ListPicks = ({ goods, itemLength, pickItem }: IListPicks) => {
  const itemLen = itemLength || 4;
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);
  const [isViewButton, setIsViewButton] = useState<Boolean>(false);

  useEffect(() => {
    setViewIndex(0);
    const max = Utils.getListMaxLength(goods.length, itemLen);
    if (max > 0) {
      setIsViewButton(true);
    }
  }, [goods]);

  const handlePrevClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    if (viewIndex > 0) {
      setViewIndex(viewIndex - 1);
    } else {
      const max = Utils.getListMaxLength(goods.length, itemLen);
      setViewIndex(max);
    }
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    const max = Utils.getListMaxLength(goods.length, itemLen);

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
        <li>
          <GoodsCardPicks {...pickItem} />
        </li>
        {goods &&
          goods.map((item, i) => {
            const min = viewIndex * itemLen;
            const max = min + itemLen;

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

export default ListPicks;
