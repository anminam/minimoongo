import React, { useState } from "react";
import NavCategory from "View/Components/NavCategory";
import { IMainCategoryId } from "Interfaces/ICategory";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import { bookKorbookEvents } from "Core/data";
import { korbookSimpleEvent, korTodayBookSliderEvent } from "Core/events/data";
import Welcome2 from "View/Containers/Welcomes/Welcome2";
import Slider3DController from "View/Containers/Slider/Slider3DController";

const KorBook = () => {
  const [categoryId] = useState<IMainCategoryId>("korbook");

  // 이걸 서버에서 할까??
  const imgPath = "assets/events/welcomes/categorywelcom/korbook/2020_06_23/";

  return (
    <div className="container_lg page">
      <div className="category-page">
        <div className="category-page__category">
          <NavCategory navCategoryId={categoryId} />
        </div>
        <div className="category-page__contents">
          <CategoryEventSlider
            list={bookKorbookEvents}
            imgPath={imgPath}
            width={770}
          />
          <div className="wapper-content">
            <Welcome2 eventObj={korbookSimpleEvent} />
          </div>
          <div className="wapper-content">
            <Slider3DController obj={korTodayBookSliderEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KorBook;
