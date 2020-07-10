import React from "react";
import Button from "View/Components/Button";
interface IBoxCountButtons {
  number: number;
  max: number;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}
const BoxCountButtons = ({
  number,
  max,
  onPrevClick,
  onNextClick,
}: IBoxCountButtons) => {
  return (
    <div className="box__count_buttons">
      <Button type="bannerPrev" onClick={onPrevClick} />
      <span className="page-numbers">
        {number}/{max}
      </span>
      <Button type="bannerNext" onClick={onNextClick} />
    </div>
  );
};

export default BoxCountButtons;
