import React from "react";

type TButtonType =
  | "none"
  | "normal"
  | "small"
  | "big"
  | "verysmall"
  | "add"
  | "remove"
  | "bannerPrev"
  | "bannerNext";

interface IButton {
  text?: string;
  type?: TButtonType;
  full?: boolean;
  rightChevron?: boolean;
  leftChevron?: boolean;
  color?: string;
  borderColor?: string;
  marginRight?: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  floatLeft?: string;
}

const Button = ({
  text,
  type = "normal",
  full = false,
  rightChevron = false,
  leftChevron = false,
  color,
  borderColor,
  marginRight,
  width,
  height,
  floatLeft,
  onClick,
}: IButton) => {
  const style: IButton = {
    color: color || "#000",
    borderColor: borderColor || "#ddd",
    marginRight: marginRight || "0px",
  };

  if (width) {
    style.width = width;
  }
  if (height) {
    style.height = height;
  }

  const classNames = `
  mini 
  ${type} 
  ${full ? "full" : ""} 
  ${rightChevron ? "rightChevron" : ""}
  ${leftChevron ? "leftChevron" : ""}
  ${floatLeft ? "floatLeft" : ""}
  `;

  return (
    <button style={style} className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
