import React, { useState } from "react";
import { IEventPicks } from "Interfaces/IEventList";
import { ILink } from "Interfaces/ILink";
import BookCardEvent from "../Cards/BookCardEvent";
import styled from "styled-components";
import _ from "lodash";

interface ISlider3D {
  list: ILink[];
}

interface ISlideItem {
  isChecked: boolean;
}
const SlideItem = styled.li`
  color: ${(p: ISlideItem) => (p.isChecked ? "red" : "blud")};

  &:nth-child(1) {
  }
`;

const Slider3D = ({ list }: ISlider3D) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleItemClick = ({ index }: { index: number }) => {
    setSelectedIndex(index);
  };
  return (
    <div className="slider3d">
      <div className="container">
        <ul className="list">
          {list &&
            list.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <SlideItem
                  key={index}
                  isChecked={isSelected}
                  className="item"
                  onClick={() => handleItemClick({ index })}
                >
                  <BookCardEvent {...item} />
                </SlideItem>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

interface IAs {
  list: any[];
  selectIndex: number;
  index: number;
}
const as = ({ list, selectIndex, index }: IAs): [number, number, number] => {
  const len = list.length;
  const newList = _.fill<[number, number, number]>(_.range(0, len), [0, 0, 0]);

  if (selectIndex !== index) {
    const BOUND_X = 50;
    const BOUND_Y = 0;
    const BOUND_Z = 100;
  }

  return newList[index];
};

export default Slider3D;
