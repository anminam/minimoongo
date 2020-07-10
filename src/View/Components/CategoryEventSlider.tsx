import React, { useState, useEffect, useCallback } from "react";
import { IEvent } from "Interfaces/IEventList";

interface ICategoryEventSlider {
  obj: IEvent;
  imgPath?: string;
  isDot?: boolean;
  width?: number;
  onNextItem?: () => void;
  onPrevItem?: () => void;
}
const CategoryEventSlider = ({
  obj,
  onNextItem,
  onPrevItem,
  imgPath = "",
  width = 690,
  isDot = false,
}: ICategoryEventSlider) => {
  const [viewIndex, setViewIndex] = useState<number>(0);
  const [isVisibleButton, setIsVisibleButton] = useState<Boolean>(false);

  // width 구하기
  const [totalWidth, setTotalWidth] = useState<number>();
  const [totalSlideLength, setTotalSlideLength] = useState<number>(0);

  useEffect(() => {
    let length = 0;
    obj.list.forEach((item) => (length = length + item.list.length));
    setTotalSlideLength(length);
    setTotalWidth(width * length);
  }, [obj, width]);

  /**
   * 아이템 변경
   */
  const changeItem = useCallback((index: number) => {
    setViewIndex(index);
  }, []);

  /**
   * 다음, 이전 버튼
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
   * 슬라이드 위에 다음이전버튼 보이게하는곳
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

  const handleSliderListContainerMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    console.log("a");
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
    changeItem(Number(index));
  };
  const handleSliderListContainerInnerItemMouseLeave = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    // event.currentTarget.classList.remove("on");
  };
  /**
   * 리스트 타이틀 선택
   * @param event
   */
  const handleSliderListContainerTitleMouseOver = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const index = event.currentTarget.getAttribute("custom-index");
    const len = obj.list.length;
    if (Number(index) !== Math.floor(viewIndex / len)) {
      const rand = Math.floor(Math.random() * len);
      changeItem(Number(index) * len + rand);
    }
  };

  const handleSliderListContainerTitleMouseLeave = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {};

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
            {obj.list &&
              obj.list.map((mainItem) => {
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
          {obj.list &&
            obj.list.map((mainItem, index) => {
              const isIng =
                index === Math.floor(viewIndex / obj.list.length) ? "ing" : "";
              return (
                <li
                  key={index}
                  custom-index={index}
                  className={`${isIng}`}
                  onMouseMove={handleSliderListContainerMouseOver}
                  onMouseLeave={handleSliderListContainerMouseLeave}
                >
                  <dl>
                    <dt
                      custom-index={index}
                      onMouseOver={handleSliderListContainerTitleMouseOver}
                      onMouseLeave={handleSliderListContainerTitleMouseLeave}
                    >
                      {mainItem.displayName}
                    </dt>
                    <dd>
                      <ul>
                        {mainItem.list &&
                          mainItem.list.map((subItem, subIndex) => {
                            const customIndex =
                              index * obj.list.length + subIndex;
                            const isOn = customIndex === viewIndex ? "on" : "";
                            return (
                              <li
                                key={subIndex}
                                className={isOn}
                                custom-index={customIndex}
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
              {obj.list &&
                obj.list.length > 1 &&
                obj.list.map((subItem, index) => {
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
