import React from "react";
import Button from "Components/Button";

const BookBuyButtons = () => {
  return (
    <div>
      <Button type="buy" text="장바구니 담기" />
      <Button type="buy" text="바로구매" />
      <Button type="buy" text="바로드림 주문" />
      <Button type="buy" text="선물하기" />
      <Button type="buy" text="보관함 담기" />
    </div>
  );
};

export default BookBuyButtons;
