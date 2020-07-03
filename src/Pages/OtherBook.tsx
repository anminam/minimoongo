import React, { useState } from "react";
import NavCategory from "View/Components/NavCategory";
import { IMainCategoryId } from "Interfaces/ICategory";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import { otherBookTopSliderEvent } from "Core/events/data";

const OtherBook = () => {
  const [categoryId] = useState<IMainCategoryId>("otherbook");

  return (
    <div className="container_lg page">
      <div className="category-page">
        <div className="category-page__category">
          <NavCategory navCategoryId={categoryId} />
        </div>
        <div className="category-page__contents">
          <CategoryEventSlider obj={otherBookTopSliderEvent} width={770} />
          <div className="wapper-content">
            {/* <Welcome2 eventObj={korbookSimpleEvent} /> */}
          </div>
          <div className="wapper-content">
            {/* <BoxEvent eventObj={korTodayBookSliderEvent} isBorder={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBook;
