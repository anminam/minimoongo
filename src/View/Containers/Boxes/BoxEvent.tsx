import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IEvent } from "Interfaces/IEventList";
import { Utils } from "Core/Utils";
import { NavUtils } from "Core/nav/utils";
import ListNormal from "../Lists/ListNormal";
import { useSelector } from "react-redux";
import { TRootState } from "Core/reducers";
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

  return (
    <div className="box box-welcome1 left-title container_lg">
      <h3 className="title">
        <a href={href}>{title}</a>
      </h3>
      <div className={`contents-container`}>
        {eventObj.list.map((item, i) => {
          return (
            <div className="section" key={i}>
              <h3>
                <a
                  href={item.href}
                  className={i === index ? "on" : ""}
                  onMouseOver={() => handleMouseOver(i)}
                >
                  {item.displayName}
                </a>
              </h3>
              {i === index && (
                <div className={`section-contents ${isBorder ? "border" : ""}`}>
                  <Slider3DController obj={item} />;
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
