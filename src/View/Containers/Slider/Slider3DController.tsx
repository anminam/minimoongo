import React, { useState } from "react";
import { IEventListItem } from "Interfaces/IEventList";
import Slider3D from "./Slider3D";
import BoxNormal from "../Boxes/BoxNormal";
import Slider from "Components/Slider";
import { ILink } from "Interfaces/ILink";

interface ISlider3DController {
  obj: IEventListItem;
}

/**
 * 3D slider 를 사용하기위한 컨트롤러
 * @param param0
 */
const Slider3DController = React.memo(({ obj }: ISlider3DController) => {
  const { list, displayName, id, href = "/" } = obj;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectedItemChanged = (index: number) => {
    setSelectedIndex(index);
  };

  console.log(obj);

  return (
    <div className="slider3d-controller">
      <BoxNormal eventObj={{ title: displayName, id: id, href: href }}>
        <div className="left-right">
          <div className="left w60">
            <Slider3D
              list={list}
              initIndex={selectedIndex}
              onSelectedItemChanged={handleSelectedItemChanged}
            />
          </div>
          <div className="right w40">
            <div className="wapper-slider" style={{ width: "300px" }}>
              <Slider
                list={list[selectedIndex].subImageList as ILink[]}
                height={280}
                width={320}
                isDot={false}
              />
            </div>
          </div>
        </div>
        <ControllFooter
          href={list[selectedIndex].href}
          title={list[selectedIndex].displayName}
          // author={}
          // company={""}
        />
      </BoxNormal>
    </div>
  );
});

const ControllFooter = ({
  href,
  title,
  author = "무제",
  company = "미니컴퍼니",
}: {
  href: string;
  title: string;
  author?: string;
  company?: string;
}): JSX.Element => {
  return (
    <div className="footer">
      <div className="layer">
        <div className="title">
          <a href={href} title={title}>
            {title}
          </a>
        </div>
        <div className="author">
          {author} <span className="line">|</span> {company}
        </div>
      </div>
    </div>
  );
};

export default Slider3DController;
