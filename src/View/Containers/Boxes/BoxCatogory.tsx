import React, { useState } from "react";
import "Styles/index.scss";
import { IBox } from "Interfaces/IContainers";
import CategoryList from "../Lists/CategoryList";
import { Link } from "react-router-dom";

const BoxCatogory = ({ eventObj, isBorder = false, type }: IBox) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");
  const [index, setIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  const [isViewSubCategoryTitle] = useState<boolean>(eventObj.list.length > 1);

  return (
    <div className={`box box-catogory ${type}`}>
      <h2 className="box__title">
        <a href={href}>{title}</a>
      </h2>
      <div className="box__contents">
        {eventObj.list.map((item, i) => {
          return (
            <div className="section" key={i}>
              {isViewSubCategoryTitle && (
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
              {index === i && (
                <div
                  className={`section__contents ${isBorder ? "border" : ""}`}
                >
                  <CategoryList list={item.list} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="box__more">
        <Link to={"/"}>더보기 +</Link>
      </div>
    </div>
  );
};

export default BoxCatogory;
