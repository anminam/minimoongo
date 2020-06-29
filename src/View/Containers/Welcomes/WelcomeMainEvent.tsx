import React, { useState, useEffect } from "react";
import { IEventListItem } from "Interfaces/IEventList";
import Slider from "Components/Slider";
import { Utils } from "Core/Utils";

interface IWelcomeMainEvent {
  list: IEventListItem[];
  onChangeColor?: (color: string | undefined) => void;
}

/**
 * welcom1안에 포함되어있는데 WelcomeMainEvent 네이밍을 슬라이드 컨테이너등으로 바꿔야함
 * @param param0
 */
const WelcomeMainEvent = ({ list, onChangeColor }: IWelcomeMainEvent) => {
  const [nowList] = useState<IEventListItem[]>(list);
  const [item, setItem] = useState<IEventListItem>(list[0]);

  useEffect(() => {
    setItem(list[0]);
  }, [list]);

  const handleMouseOver = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as Element;
    const { id } = target;

    const obj = nowList?.find((item) => item.id === id);
    if (obj) {
      setItem(obj);
    }
  };

  const handlePrevItem = () => {
    prevItem();
  };

  const handleNextItem = () => {
    nextItem();
  };

  const prevItem = () => {
    const index = Utils.findIndex(nowList, item.id);
    const nextIndex = Utils.prevIndex(nowList, index);
    setItem(nowList[nextIndex]);
  };

  const nextItem = () => {
    const index = Utils.findIndex(nowList, item.id);
    const nextIndex = Utils.nextIndex(nowList, index);
    setItem(nowList[nextIndex]);
  };

  return (
    <div className="welcome-main-event">
      <Slider
        list={item.list}
        isDot={true}
        isBottom={true}
        imagePath={"assets/events/welcomes/welcome1/images/"}
        onNextItem={handleNextItem}
        onPrevItem={handlePrevItem}
        onHandleColor={onChangeColor}
      />
      <ul className="item-list">
        {nowList &&
          nowList.map((pItem) => {
            return (
              <li key={pItem.id}>
                <button
                  type="button"
                  id={pItem.id}
                  className={`${pItem.id === item.id ? "on" : ""} `}
                  onMouseOver={handleMouseOver}
                >
                  {pItem.displayName}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WelcomeMainEvent;
