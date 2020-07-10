import React, { useState } from "react";
import NavCategory from "View/Components/NavCategory";
import { IMainCategoryId } from "Interfaces/ICategory";
import CategoryEventSlider from "View/Components/CategoryEventSlider";
import {
  korbookSimpleEvent,
  korTodayBookSliderEvent,
  korKookTopSliderEvent,
  korBookBestSeller,
  korBookToday,
  korPageMapEvent,
} from "Core/events/data";
import Welcome2 from "View/Containers/Welcomes/Welcome2";
import BoxEvent from "View/Containers/Boxes/BoxEvent";
import BoxCatogory from "View/Containers/Boxes/BoxCatogory";
import BoxNormal from "View/Containers/Boxes/BoxNormal";
import ListMap from "View/Containers/Lists/ListMap";
import BoxContents from "View/Containers/Boxes/Components/BoxContents";

const KorBook = () => {
  const [categoryId] = useState<IMainCategoryId>("korbook");

  return (
    <div className="container_lg page">
      <div className="category-page">
        <div className="category-page__category">
          <NavCategory navCategoryId={categoryId} />
        </div>
        <div className="category-page__contents">
          <CategoryEventSlider obj={korKookTopSliderEvent} width={770} />
          <div className="wapper-content">
            <Welcome2 eventObj={korbookSimpleEvent} />
          </div>
          <div className="wapper-content">
            <BoxEvent eventObj={korTodayBookSliderEvent} isBorder={true} />
          </div>
          <div className="wapper-content r1">
            <BoxCatogory
              eventObj={korBookBestSeller}
              isBorder={true}
              type={"tab"}
            />
            <BoxCatogory
              eventObj={korBookBestSeller}
              isBorder={true}
              type={"oneCol"}
            />
          </div>
          <div className="wapper-content r1">
            <BoxCatogory eventObj={korBookToday} isBorder={true} type={"tab"} />
            <BoxCatogory
              eventObj={korBookToday}
              isBorder={true}
              type={"oneCol"}
            />
          </div>
          <div className="wapper-content">
            <BoxNormal eventObj={korPageMapEvent} height={404}>
              <ListMap list={korPageMapEvent.list[0].list} />
            </BoxNormal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KorBook;
