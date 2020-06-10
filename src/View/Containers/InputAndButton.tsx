import React from "react";
import Input from "Components/Input";
import Button from "Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { TRootState } from "Core/reducers";
import { ProductActions } from "Core/product/actions";

const lineHeight = "30px";

const InputAndButton = () => {
  const count = useSelector((state: TRootState) => {
    return state.product.count;
  });

  const dispatch = useDispatch();

  const handleOnAdd = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(ProductActions.add());
  };
  const handleOnremove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(ProductActions.remove());
  };
  return (
    <>
      <Input
        floatLeft={true}
        value={count}
        width={`80px`}
        height={lineHeight}
      />
      <Button
        type="add"
        width={lineHeight}
        height={lineHeight}
        floatLeft={true}
        onClick={handleOnAdd}
      />
      <Button
        type="remove"
        width={lineHeight}
        height={lineHeight}
        floatLeft={true}
        onClick={handleOnremove}
      />
    </>
  );
};
export default InputAndButton;
