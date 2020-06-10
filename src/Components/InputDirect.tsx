import React, { useEffect } from "react";
import useInputs from "Core/Hooks/useInput";

type TInputType = "number" | "text";
type TInputStyleType = "none";

interface iii {
  value: number;
}

interface IInputDirect<T> {
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

function InputDirect<T extends number>({
  value,
  type = "number",
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
}: IInputDirect<T>) {
  const style = {
    color: color || "#000",
    borderColor: borderColor || "#ddd",
    marginRight: marginRight || "0px",
    width: width || "100px",
    height: height || "30px",
  };

  const classNames = `
  mini 
  ${type} 
  ${full ? "full" : ""} 
  ${rightChevron ? "rightChevron" : ""}
  ${leftChevron ? "leftChevron" : ""}
  ${floatLeft ? "floatLeft" : ""}
  `;

  const [inputState, onInputChange, setValue] = useInputs<T>(value as T);

  useEffect(() => {
    if (value) {
      // setValue(value);
    }
  }, [setValue, value]);

  return (
    <input
      type={type}
      style={style}
      className={classNames}
      onClick={onClick}
      value={inputState}
      onChange={onInputChange}
    />
  );
}

export default InputDirect;
