import React, { useState, useEffect } from "react";
import { ILink } from "Interfaces/ILink";

interface ISlider {
  list: ILink[];
  onNextItem?: () => void;
  onPrevItem?: () => void;
  onHandleColor?: (color: string | undefined) => void;
}
const Slider = ({ list, onNextItem, onPrevItem, onHandleColor }: ISlider) => {
  const imgPath = "assets/events/welcomeMain/images/";
  const [onItem, setOnItem] = useState<ILink | null>();
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  useEffect(() => {
    // setOnItem(list[0]);
    changeItem(0);
  }, [list]);

  const changeItem = (index: number) => {
    setViewIndex(index);
    if (onHandleColor) {
      onHandleColor(list[index]?.color);
    }
  };

  const handleMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = event.target as Element;
    const { id } = target;

    const obj = list?.find((item, index) => {
      if (item.id === id) {
        changeItem(index);
        return true;
      }
    });

    if (obj) {
      setOnItem(obj);
    }
  };

  const handlePrevClick = () => {
    if (viewIndex === 0) {
      if (onPrevItem) {
        onPrevItem();
      }
      return;
    }
    changeItem(viewIndex - 1);
  };
  const handleNextClick = () => {
    if (viewIndex >= list.length - 1) {
      if (onNextItem) {
        onNextItem();
      }
      return;
    }
    changeItem(viewIndex + 1);
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
      className="slider"
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
    >
      <div className="view-container" style={{ width: 690 * list.length }}>
        <ul style={{ marginLeft: -(690 * viewIndex) }}>
          {list &&
            list.map((subItem) => {
              return (
                <li key={subItem.id}>
                  {subItem.src && (
                    <img
                      src={imgPath + subItem.src}
                      alt={subItem.displayName}
                    />
                  )}
                  {!subItem.src && subItem.displayName}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="dots">
        <div className="dots-wapper">
          <ul className="bullet">
            {list &&
              list.length > 1 &&
              list.map((subItem, index) => {
                return (
                  <li
                    key={subItem.id}
                    id={subItem.id}
                    className={index === viewIndex ? "on" : ""}
                    onMouseOver={handleMouseOver}
                  >
                    {subItem.displayName}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
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

export default Slider;
