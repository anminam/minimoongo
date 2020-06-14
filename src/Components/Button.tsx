import React from "react";
import { type } from "os";

type TButtonType =
  | "none"
  | "normal"
  | "small"
  | "big"
  | "verysmall"
  | "add"
  | "remove"
  | "buy"
  | "bannerPrev"
  | "bannerNext";

type TButtonColorType = "normal" | "blue1" | "blue2";

interface IButton {
  text?: string;
  type?: TButtonType;
  colorType?: TButtonColorType;
  full?: boolean;
  rightChevron?: boolean;
  leftChevron?: boolean;
  color?: string;
  borderColor?: string;
  marginRight?: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  floatLeft?: boolean;
}

const Button = ({
  text,
  type = "normal",
  colorType = "normal",
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

  // const classList = []
  const classNames = `
  mini 
  ${type} 
  ${full ? "full" : ""} 
  ${rightChevron ? "rightChevron" : ""}
  ${leftChevron ? "leftChevron" : ""}
  ${floatLeft ? "floatLeft" : ""}
  ${colorType ? colorType : ""}
  `;

  return (
    <button style={style} className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
