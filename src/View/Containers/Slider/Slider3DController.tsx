import React, { useState } from "react";
import { IEventPicks, IEventListItem } from "Interfaces/IEventList";
import { ILink } from "Interfaces/ILink";
import BookCardEvent from "../Cards/BookCardEvent";
import styled from "styled-components";
import _ from "lodash";
import { mini } from "Core/Mini";
import Slider3D from "./Slider3D";
import { korbookHaveSliderEvent } from "Core/events/data";
import BoxNormal from "../Boxes/BoxNormal";

interface ISlider3DController {
  obj: IEventListItem;
}

/**
 * 3D slider 를 사용하기위한 컨트롤러
 * @param param0
 */
const Slider3DController = ({ obj }: ISlider3DController) => {
  const { list, displayName, id, href = "/" } = obj;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectedItemChanged = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="slider3d-controller">
      <BoxNormal eventObj={{ title: displayName, id: id, href: href }}>
        <div className="left-right">
          <div className="left">
            <Slider3D
              list={list}
              onSelectedItemChanged={handleSelectedItemChanged}
            />
          </div>
          <div className="right">asdfasdf</div>
        </div>
        <div className="footer">
          <div className="layer">
            <div className="title">
              <a
                href="http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&amp;ejkGb=KOR&amp;barcode=9791189809256"
                title="1950"
              >
                1950
              </a>
            </div>
            <div className="author">
              존 리치 <span className="line">|</span> 서울셀렉션
            </div>
          </div>
        </div>
      </BoxNormal>
    </div>
  );
};

export default Slider3DController;
