import React, { useCallback } from "react";
import Input from "View/Components/Input";
import { useSelector, useDispatch } from "react-redux";
import { TRootState } from "Core/reducers";
import { ProductActions } from "Core/product/actions";
import Button from "View/Components/Button";

const InputAndButton = () => {
  const lineHeight = "30px";
  const dispatch = useDispatch();

  // const [inputValue, setInputValue] = useState<number>();

  const count = useSelector((state: TRootState) => {
    return state.product.count;
  });

  const handleInputChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(ProductActions.changeValue(4));
  };

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
        onChangeValue={handleInputChangeValue}
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
