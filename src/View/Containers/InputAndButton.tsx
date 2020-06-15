import React, { useCallback } from "react";
import Input from "Components/Input";
import Button from "Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { TRootState } from "Core/reducers";
import { ProductActions } from "Core/product/actions";

const InputAndButton = () => {
  const lineHeight = "30px";
  const dispatch = useDispatch();

  const count = useSelector((state: TRootState) => {
    return state.product.count;
  });

  const handleOnAdd = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(ProductActions.add());
    },
    [dispatch]
  );
  const handleOnRemove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(ProductActions.remove());
    },
    [dispatch]
  );
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
        onClick={handleOnRemove}
      />
    </>
  );
};
export default InputAndButton;
