import React, { useState, useEffect } from "react";
import BoxSubTitle from "./BoxSubTitle";
import { IEvent } from "Interfaces/IEventList";

interface IBoxContents {
  children: React.ReactNode;
  eventObj: IEvent;
  isBorder?: boolean;
}

const BoxContents = ({ children, eventObj, isBorder }: IBoxContents) => {
  const [isViewSubTitle, setisViewSubTitle] = useState<boolean>(true);
  const [isSelectedIndex, setIsSelectedIndex] = useState<number>(0);

  useEffect(() => {
    setisViewSubTitle(eventObj.list.length > 1);
  }, [children, eventObj]);

  const handleMouseOver = (index: number) => {
    setIsSelectedIndex(index);
  };

  return (
    <div className="box__contents">
      {eventObj.list.map((item, i) => {
        return (
          <div className="section" key={i}>
            {/* section title */}
            {isViewSubTitle && (
              <BoxSubTitle
                index={i}
                href={item.href || ""}
                title={item.displayName}
                isSelected={i === isSelectedIndex}
                onMouseOver={handleMouseOver}
              />
            )}
            {/* section contents */}
            {isSelectedIndex === i && (
              <div className={`section__contents ${isBorder ? "border" : ""}`}>
                {children}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BoxContents;
