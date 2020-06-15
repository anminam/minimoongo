import React, { memo } from "react";

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

interface IButton extends IButtonStyle {
  type?: TButtonType;
  colorType?: TButtonColorType;
  full?: boolean;
  rightChevron?: boolean;
  leftChevron?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  floatLeft?: boolean;
  children?: React.ReactNode;
}

interface IButtonStyle {
  color?: string;
  borderColor?: string;
  marginRight?: string;
  width?: string;
  height?: string;
}

const Button = memo(
  ({
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
    children,
    onClick,
  }: IButton) => {
    const style: IButtonStyle = {
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

    const makeClass = ({
      type,
      full,
      rightChevron,
      leftChevron,
      floatLeft,
      colorType,
    }: IButton): string => {
      const list = ["mini"];

      type && list.push(type);

      full && list.push("full");
      rightChevron && list.push("rightChevron");
      leftChevron && list.push("leftChevron");
      floatLeft && list.push("floatLeft");
      colorType && list.push(colorType);
      return list.join(" ");
    };

    const classNames = makeClass({
      type,
      full,
      rightChevron,
      leftChevron,
      floatLeft,
      colorType,
    });

    return (
      <button style={style} className={classNames} onClick={onClick}>
        {children && children}
      </button>
    );
  }
);

export default Button;
