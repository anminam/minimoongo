import React from "react";
import "Styles/index.scss";

interface IDots {
  length: number;
  index: number;
  onMouseOver?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  isBottom?: boolean;
}

const SliderDots = ({ length, index, onMouseOver, isBottom }: IDots) => {
  const mainClassName = `slider-dots ${isBottom ? "bottom" : ""}`;
  return (
    <div className={mainClassName}>
      <div className="slider-dots__container">
        <ul className="bullet">
          {length &&
            length > 1 &&
            [...Array(length)].map((number, i) => {
              return (
                <li
                  key={i}
                  id={i.toString()}
                  className={i === index ? "on" : ""}
                  onMouseOver={onMouseOver}
                >
                  1
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SliderDots;
