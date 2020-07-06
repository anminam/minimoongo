import React, { useState, useEffect, useCallback } from "react";
import { ILink } from "Interfaces/ILink";
import SliderDots from "View/Components/SliderDots";

interface ISlider {
  list: ILink[];
  imagePath?: string;
  onNextItem?: () => void;
  onPrevItem?: () => void;
  onHandleColor?: (color: string | undefined) => void;
  height?: number;
  width?: number;
  isDot?: boolean;
  isBottom?: boolean;
}

const Slider = ({
  list,
  imagePath = "",
  onNextItem,
  onPrevItem,
  onHandleColor,
  height,
  width,
  isDot = false,
  isBottom = false,
}: ISlider) => {
  // const [onItem, setOnItem] = useState<ILink | null>();
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  const sWidth = width || 690;

  const changeItem = useCallback(
    (index: number) => {
      setViewIndex(index);
      if (onHandleColor) {
        onHandleColor(list[index]?.color);
      }
    },
    [list]
  );

  useEffect(() => {
    // setOnItem(list[0]);
    changeItem(0);
  }, [changeItem]);

  const handleDotMouseOver = (id: string) => {
    changeItem(Number(id));
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

  const slideItemStyle = {
    width: sWidth,
  };

  return (
    <div
      className="slider"
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
      style={mainStyle}
    >
      <div className="view-container" style={{ width: sWidth * list.length }}>
        <ul style={{ marginLeft: -(sWidth * viewIndex) }}>
          {list &&
            list.map((subItem, index) => {
              return (
                <li key={index} style={slideItemStyle}>
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
      {isDot && (
        <SliderDots
          length={list.length}
          index={viewIndex}
          onMouseOver={handleDotMouseOver}
          isBottom={isBottom}
        />
      )}
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
