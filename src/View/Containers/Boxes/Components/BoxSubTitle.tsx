import React from "react";
interface IBoxSubTitle {
  index: number;
  href: string;
  title: string;
  isSelected?: boolean;
  onMouseOver: (index: number) => void;
}
const BoxSubTitle = ({
  index,
  href,
  title,
  isSelected,
  onMouseOver,
}: IBoxSubTitle) => {
  return (
    <h3 className="section__title">
      <a
        href={href}
        className={isSelected ? "on" : ""}
        onMouseOver={() => onMouseOver(index)}
      >
        {title}
      </a>
    </h3>
  );
};

export default BoxSubTitle;
