import React, { useState } from "react";
import NavCategory from "View/Components/NavCategory";
import { IMainCategoryId } from "Interfaces/ICategory";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import {
  otherBookTopSliderEvent,
  otherBookBestSeller,
  otherTodayBookSliderEvent,
} from "Core/events/data";
import BoxEvent from "View/Containers/Boxes/BoxEvent";
import BoxCatogory from "View/Containers/Boxes/BoxCatogory";

const OtherBook = () => {
  const [categoryId] = useState<IMainCategoryId>("otherbook");

  return (
    <div className="container_lg page">
      <div className="category-page">
        <div className="category-page__category">
          <NavCategory navCategoryId={categoryId} />
        </div>
        <div className="category-page__contents">
          <div className="wapper-content">
            <CategoryEventSlider obj={otherBookTopSliderEvent} width={770} />
          </div>
          <div className="wapper-content">
            <BoxEvent eventObj={otherTodayBookSliderEvent} isBorder={true} />
          </div>
          <div className="wapper-content">
            <BoxCatogory
              eventObj={otherBookBestSeller}
              isBorder={true}
              type={"tab"}
              itemViewLength={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBook;
