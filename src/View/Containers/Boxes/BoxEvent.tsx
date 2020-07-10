import React, { useState } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IEvent } from "Interfaces/IEventList";
import Slider3DController from "View/Containers/Slider/Slider3DController";

interface IBoxEvent {
  eventObj: IEvent;
  isBorder?: boolean;
}

interface IEventItem {
  id: string;
  title: string;
  href: string;
  list: TGoods[];
}

const BoxEvent = ({ eventObj, isBorder = false }: IBoxEvent) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");
  const [index, setIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  const [isTitleView] = useState<boolean>(eventObj.list.length > 1);

  return (
    <div className="box">
      <h3 className="box__title">
        <a href={href}>{title}</a>
      </h3>
      <div className="box__contents">
        {eventObj.list.map((item, i) => {
          return (
            <div className="section" key={i}>
              {isTitleView && (
                <h3 className="section__title">
                  <a
                    href={item.href}
                    className={i === index ? "on" : ""}
                    onMouseOver={() => handleMouseOver(i)}
                  >
                    {item.displayName}
                  </a>
                </h3>
              )}
              {i === index && (
                <div
                  className={`section__contents ${isBorder ? "border" : ""}`}
                >
                  <Slider3DController obj={item} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxEvent;
