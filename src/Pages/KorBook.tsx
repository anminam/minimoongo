import React, { useState } from "react";
import NavCategory from "Components/NavCategory";
import { IMainCategoryId } from "Interfaces/ICategory";
import CategoryEventSlider from "Components/CategoryEventSlider";
import { bookKorbookEvents } from "Core/data";
import { korbookSimpleEvent } from "Core/events/data";
import Welcome2 from "View/Containers/Welcomes/Welcome2";

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
        </div>
      </div>
    </div>
  );
};

export default KorBook;
