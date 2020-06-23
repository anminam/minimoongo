import React from "react";

type TInputType = "number" | "text";
type TInputStyleType = "none";

interface IInput<T> {
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
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input<T extends number>({
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
  onChangeValue,
}: IInput<T>) {
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

  // const [inputValue, setInputValue] = useState<T>();

  // useEffect(() => {
  //   setInputValue(value);
  // }, [value]);

  return (
    <input
      type={type}
      style={style}
      className={classNames}
      onClick={onClick}
      value={value}
      onChange={onChangeValue}
    />
  );
}

export default Input;
