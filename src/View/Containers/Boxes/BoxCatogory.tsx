import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { IBox } from "Interfaces/IContainers";
import CategoryList from "../Lists/CategoryList";
import { Link } from "react-router-dom";
import Button from "View/Components/Button";
import useButtonLength from "Core/Hooks/useButtonLength";

const BoxCatogory = ({ eventObj, isBorder = false, type }: IBox) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");
  const [index, setIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  const [isViewSubCategoryTitle, setIsViewSubCategoryTitle] = useState<boolean>(
    true
  );

  const [isMoreButton, setIsMorButton] = useState<boolean>(true);

  useEffect(() => {
    // 기본값
    setIsViewSubCategoryTitle(eventObj.list.length > 1);

    // oneCol 타입일 경우
    if (type === "oneCol") {
      setIsViewSubCategoryTitle(false);
      setIsMorButton(false);
    }
  }, [eventObj, type]);

  const [oneColNumber, oneColNext, oneColPrev] = useButtonLength(
    1,
    eventObj.list[0].list.length
  );

  const handleOneColPrevClick = () => {
    oneColPrev();
  };
  const handleOneColNextClick = () => {
    oneColNext();
  };

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
                  <CategoryList
                    list={item.list}
                    indexMode={type === "oneCol" ? oneColNumber - 1 : undefined}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* 더보기 버튼 */}
      {isMoreButton && (
        <div className="box__more">
          <Link to={"/"}>더보기 +</Link>
        </div>
      )}
      {/* 1/4 카운트 버튼 */}
      {type === "oneCol" && (
        <div className="box__more_onecol">
          <Button type="bannerPrev" onClick={handleOneColPrevClick} />
          <span className="page-numbers">
            {oneColNumber}/{eventObj.list[0].list.length}
          </span>
          <Button type="bannerNext" onClick={handleOneColNextClick} />
        </div>
      )}
    </div>
  );
};

export default BoxCatogory;
