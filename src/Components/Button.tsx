import React from "react";

type TButtonType =
  | "none"
  | "normal"
  | "small"
  | "big"
  | "verysmall"
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  text,
  type = "normal",
  full = false,
  rightChevron = false,
  leftChevron = false,
  color,
  borderColor,
  onClick,
}: IButton) => {
  const style = {
    color: color || "#000",
    borderColor: borderColor || "#ddd",
  };

  return (
    <button
      style={style}
      className={`mini
      ${type}
      ${full ? "full" : ""}
      ${rightChevron ? "rightChevron" : ""}
      ${leftChevron ? "leftChevron" : ""}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
