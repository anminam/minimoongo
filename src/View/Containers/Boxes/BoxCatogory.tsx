import React, { useState } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IBox } from "Interfaces/IContainers";

interface IEventItem {
  id: string;
  title: string;
  href: string;
  list: TGoods[];
}

const BoxCatogory = ({ eventObj, isBorder = false, type }: IBox) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");
  const [index, setIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  const [isTitleView] = useState<boolean>(eventObj.list.length > 1);

  return (
    <div className={`box box-catogory ${type}`}>
      <h2 className="box__title">
        <a href={href}>{title}</a>
      </h2>
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
              <div className={`section__contents ${isBorder ? "border" : ""}`}>
                호엥
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxCatogory;
