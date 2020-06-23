import React, { useState, useEffect, useCallback } from "react";
import { IEventListItem } from "Interfaces/IEventList";

interface ICategoryEventSlider {
  list: IEventListItem[];
  imgPath: string;
  isDot?: boolean;
  width?: number;
  onNextItem?: () => void;
  onPrevItem?: () => void;
}
const CategoryEventSlider = ({
  list,
  onNextItem,
  onPrevItem,
  imgPath,
  width = 690,
  isDot = false,
}: ICategoryEventSlider) => {
  // const [onItem, setOnItem] = useState<ILink | null>();
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  // const [sliderList, setSliderList] = useState<ILink[]>();

  // useEffect(() => {
  //   const newlist = list.map((item))
  //   setSliderList()
  // }, [list]);

  // width 구하기
  const [totalWidth, setTotalWidth] = useState<number>();
  const [totalSlideLength, setTotalSlideLength] = useState<number>(0);

  useEffect(() => {
    let length = 0;
    list.forEach((item) => (length = length + item.list.length));
    setTotalSlideLength(length);
    setTotalWidth(width * length);
  }, [list.length, width]);

  /**
   * 아이템 변경
   */
  const changeItem = useCallback((index: number) => {
    setViewIndex(index);
  }, []);

  /**
   * 다음, 이전
   */
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
    if (viewIndex >= totalSlideLength - 1) {
      if (onNextItem) {
        onNextItem();
      }
      return;
    }
    changeItem(viewIndex + 1);
  }, [changeItem, totalSlideLength, onNextItem, viewIndex]);

  /**
   * 슬라이드 위에
   */
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

  /**
   * dot over
   * @param event
   */
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

    // if (obj) {
    //   setOnItem(obj);
    // }
  };

  const handleSliderListContainerMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.currentTarget.classList.add("on");
  };
  const handleSliderListContainerMouseLeave = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.currentTarget.classList.remove("on");
  };

  /**
   * 리스트 선택 후 아이템
   * @param event
   */
  const handleSliderListContainerInnerItemMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.currentTarget.classList.add("on");
    const index = event.currentTarget.getAttribute("custom-index");

    setViewIndex(Number(index));
  };
  const handleSliderListContainerInnerItemMouseLeave = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.currentTarget.classList.remove("on");
  };

  return (
    <div
      className="category-event-slider"
      style={{ width }}
      onMouseOver={handleViewMouseOver}
      onMouseLeave={handleViewMouseLeave}
    >
      <div className="view-container">
        <div className="slider-container" style={{ width: totalWidth }}>
          <ul style={{ marginLeft: -(width * viewIndex) }}>
            {list &&
              list.map((mainItem) => {
                return mainItem.list.map((subItem) => {
                  return (
                    <li key={subItem.id} style={{ width }}>
                      {subItem.src && (
                        <img
                          src={imgPath + subItem.src}
                          alt={subItem.displayName}
                        />
                      )}
                      {!subItem.src && subItem.displayName}
                    </li>
                  );
                });
              })}
          </ul>
        </div>
      </div>
      <div className="slider-list-container">
        <ul>
          {list &&
            list.map((mainItem, index) => {
              return (
                <li
                  key={index}
                  onMouseOver={handleSliderListContainerMouseOver}
                  onMouseLeave={handleSliderListContainerMouseLeave}
                >
                  <dl>
                    <dt>{mainItem.displayName}</dt>
                    <dd>
                      <ul>
                        {mainItem.list &&
                          mainItem.list.map((subItem, subIndex) => {
                            return (
                              <li
                                key={subIndex}
                                custom-index={index * list.length + subIndex}
                                onMouseOver={
                                  handleSliderListContainerInnerItemMouseOver
                                }
                                onMouseLeave={
                                  handleSliderListContainerInnerItemMouseLeave
                                }
                              >
                                {subItem.displayName}
                              </li>
                            );
                          })}
                      </ul>
                    </dd>
                  </dl>
                </li>
              );
            })}
        </ul>
      </div>
      {isDot && (
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

export default CategoryEventSlider;
