import React from "react";

type TButtonSize = "none" | "normal" | "small" | "big" | "verysmall";

interface IButton {
  text: string;
  size?: TButtonSize;
  full?: boolean;
  rightChevron?: boolean;
  leftChevron?: boolean;
  color?: string;
  borderColor?: string;
}

const Button = ({
  text,
  size = "normal",
  full = false,
  rightChevron = false,
  leftChevron = false,
  color,
  borderColor,
}: IButton) => {
  const style = {
    color: color || "#000",
    borderColor: borderColor || "#ddd",
  };

  return (
    <button
      style={style}
      className={`mini ${size}
      ${full ? "full" : ""}
      ${rightChevron ? "rightChevron" : ""}
      ${leftChevron ? "leftChevron" : ""}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
