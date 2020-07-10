import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { IBox } from "Interfaces/IContainers";
import CategoryList from "../Lists/CategoryList";
import { Link } from "react-router-dom";
import Button from "View/Components/Button";
import useButtonLength from "Core/Hooks/useButtonLength";
import BoxTitle from "./Components/BoxTitle";
import BoxSubTitle from "./Components/BoxSubTitle";
import BoxMoreButton from "./Components/BoxMoreButton";
import BoxCountButtons from "./Components/BoxCountButtons";

const BoxCatogory = ({ eventObj, isBorder = false, type }: IBox) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setSelectedSectionIndex(index);
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
      <BoxTitle href={href} title={title} />
      <div className="box__contents">
        {eventObj.list.map((item, i) => {
          return (
            <div className="section" key={i}>
              {/* section title */}
              {isViewSubCategoryTitle && (
                <BoxSubTitle
                  index={i}
                  href={item.href || ""}
                  title={item.displayName}
                  isSelected={i === selectedSectionIndex}
                  onMouseOver={handleMouseOver}
                />
              )}
              {/* section contents */}
              {selectedSectionIndex === i && (
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
      {isMoreButton && <BoxMoreButton href={"/"} />}
      {/* 1/4 카운트 버튼 */}
      {type === "oneCol" && (
        <BoxCountButtons
          number={oneColNumber}
          max={eventObj.list[0].list.length}
          onPrevClick={handleOneColPrevClick}
          onNextClick={handleOneColNextClick}
        />
      )}
    </div>
  );
};

export default BoxCatogory;
