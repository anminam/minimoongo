import React from "react";
import { IEventPicks } from "Interfaces/IEventList";
import { ILink } from "Interfaces/ILink";

interface ISlider3D {
  list: ILink[];
}
const Slider3D = ({ list }: ISlider3D) => {
  return (
    <div className="slider3d">
      <div className="container">{/* <BooksCardEvent  */}</div>
    </div>
  );
};

export default Slider3D;
