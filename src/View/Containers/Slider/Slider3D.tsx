import React, { useState } from "react";
import { IEventPicks } from "Interfaces/IEventList";
import { ILink } from "Interfaces/ILink";
import BookCardEvent from "../Cards/BookCardEvent";
import styled from "styled-components";
import _ from "lodash";
import { mini } from "Core/Mini";

interface ISlider3D {
  list: ILink[];
  onSelectedItemChanged?: (index: number) => void;
}

interface ISlideItem {
  isChecked: boolean;
  position: number[];
  hoverPosition: number[];
}
const SlideItem = styled.li`
  transform: ${(p: ISlideItem) =>
    `translate3d(${p.position[0]}%,${p.position[1]},${p.position[2]}px)
    `};
  &:hover {
    transform: ${(p: ISlideItem) =>
      `translate3d(${p.hoverPosition[0]}%,${p.hoverPosition[1]},${p.hoverPosition[2]}px)
        `};
  }

  .event-book-card {
    opacity: ${(p: ISlideItem) => (p.isChecked ? 1 : 0.5)};
    &:hover {
      opacity: 1;
    }
  }
`;

const Slider3D = ({ list, onSelectedItemChanged }: ISlider3D) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleItemClick = ({ index }: { index: number }) => {
    setSelectedIndex(index);
    onSelectedItemChanged && onSelectedItemChanged(index);
  };
  return (
    <div className="slider3d">
      <div className="container">
        <ul className="list">
          {list &&
            list.map((item, index) => {
              const isSelected = index === selectedIndex;
              const position = get3DPosition(list, selectedIndex, index);
              return (
                <SlideItem
                  key={index}
                  isChecked={isSelected}
                  position={position[0]}
                  hoverPosition={position[1]}
                  className="item"
                  onClick={() => handleItemClick({ index })}
                >
                  <BookCardEvent obj={item} isNotOpen={!isSelected} />
                </SlideItem>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const get3DPosition = (
  list: any[],
  selectedIndex: number,
  index: number
): [number[], number[]] => {
  const len = list.length;
  let position = [0, 0, 0];
  let hoverPosition = [0, 0, 0];
  let grade = 0;

  if (selectedIndex !== index) {
    const BOUND_3D = [60, 0, 200];
    const count = mini.utils.nextNumberCount(len, selectedIndex, index);
    const gradeCount = Math.floor(len / 2);

    if (gradeCount < count) {
      grade = len - count;
    } else {
      grade = count;
    }

    // 값 변경
    position = [
      BOUND_3D[0] * (count > len / 2 ? -grade : grade),
      BOUND_3D[1] * grade,
      BOUND_3D[2] * -Math.abs(grade),
    ];
    hoverPosition = [
      (BOUND_3D[0] + 5) * (count > len / 2 ? -grade : grade),
      BOUND_3D[1] * grade,
      BOUND_3D[2] * -Math.abs(grade),
    ];
  }

  return [position, hoverPosition];
};

export default Slider3D;
