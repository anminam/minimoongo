import React, { useState, useEffect, useCallback } from "react";
import { ILink } from "Interfaces/ILink";

interface ISlider {
  list: ILink[];
  imagePath?: string;
  onNextItem?: () => void;
  onPrevItem?: () => void;
  onHandleColor?: (color: string | undefined) => void;
  height?: string;
}

const Slider = ({
  list,
  imagePath = "",
  onNextItem,
  onPrevItem,
  onHandleColor,
  height,
}: ISlider) => {
  // const [onItem, setOnItem] = useState<ILink | null>();
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  const changeItem = useCallback(
    (index: number) => {
      setViewIndex(index);
      if (onHandleColor) {
        onHandleColor(list[index]?.color);
      }
    },
    [list, onHandleColor]
  );

  useEffect(() => {
    // setOnItem(list[0]);
    changeItem(0);
  }, [list]);

  const handleMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    // const target = event.target as Element;
    // const { id } = target;
    // const obj = list?.find((item, index) => {
    //   if (item.id === id) {
    //     changeItem(index);
    //     return true;
    //   }
    // });
    // if (obj) {
    //   setOnItem(obj);
    // }
  };

  const handlePrevClick = useCallback(() => {
    if (viewIndex === 0) {
      if (onPrevItem) {
        onPrevItem();
      }
      return;
    }
    changeItem(viewIndex - 1);
  }, [changeItem, onPrevItem, viewIndex]);

  const handleNextClick = useCallback(() => {
    if (viewIndex >= list.length - 1) {
      if (onNextItem) {
        onNextItem();
      }
      return;
    }
    changeItem(viewIndex + 1);
  }, [changeItem, list.length, onNextItem, viewIndex]);

  const handleViewMouseOver = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIsVisibleButton(true);
    },
    []
  );

  const handleViewMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIsVisibleButton(false);
    },
    []
  );

  const mainStyle = {
    height,
  };

  return (
    <div
      className="slider"
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
      style={mainStyle}
    >
      <div className="view-container" style={{ width: 690 * list.length }}>
        <ul style={{ marginLeft: -(690 * viewIndex) }}>
          {list &&
            list.map((subItem, index) => {
              return (
                <li key={index}>
                  {subItem.src && (
                    <img
                      src={imagePath + subItem.src}
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
                    key={index}
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
