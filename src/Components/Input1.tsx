import React, { useEffect, useState } from "react";

type TInputType = "number" | "text" | "password";
type TInputStyleType = "none";

interface IInput1<T> {
  id: string;
  label?: string;
  value?: T;
  type?: TInputType;
  styleType?: TInputStyleType;
  full?: boolean;
  rightChevron?: boolean;
  leftChevron?: boolean;
  color?: string;
  borderColor?: string;
  marginRight?: string;
  width?: string;
  height?: string;
  floatLeft?: boolean;
  readonly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input1<T extends number>({
  id,
  label,
  value,
  type = "text",
  styleType = "none",
  full = false,
  rightChevron = false,
  leftChevron = false,
  color,
  borderColor,
  marginRight,
  width,
  height,
  floatLeft,
  readonly,
  onClick,
  onChange,
}: IInput1<T>) {
  const style = {
    // color: color || "#000",
    // borderColor: borderColor,
    // marginRight: marginRight || "0px",
    width: width || "200px",
    // height: height || "30px",
  };

  const classNames = `
  mini 
  ${type} 
  ${full ? "full" : ""} 
  ${rightChevron ? "rightChevron" : ""}
  ${leftChevron ? "leftChevron" : ""}
  ${floatLeft ? "floatLeft" : ""}
  `;

  const [inputValue, setInputValue] = useState<string>();
  const [isOnFoucs, setIsOnFoucs] = useState<boolean>(false);

  const handleOnFocus = (isOn: boolean): void => {
    setIsOnFoucs(isOn);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className="wapper-input mini" style={style}>
      {label && (
        <div
          className={`wapper-label
          ${isOnFoucs ? "on" : ""}
          ${inputValue?.toString() ? "onvalue" : ""}`}
        >
          <label>{label}</label>
        </div>
      )}
      <div
        className={`wapper-input-button
        ${isOnFoucs ? "on" : ""}
        ${inputValue ? "onvalue" : ""}`}
      >
        <input
          type={type}
          className={classNames}
          onClick={onClick}
          onChange={handleOnChange}
          onFocus={() => handleOnFocus(true)}
          onBlur={() => handleOnFocus(false)}
        />
      </div>
    </div>
  );
}

export default Input1;
