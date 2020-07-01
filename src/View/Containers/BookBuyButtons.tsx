import React from "react";
import Button from "View/Components/Button";

const BookBuyButtons = () => {
  return (
    <div>
      <Button type="buy" colorType="blue1">
        장바구니 담기
      </Button>
      <Button type="buy" colorType="blue2">
        바로구매
      </Button>
      <Button type="buy">바로드림 주문</Button>
      <Button type="buy">선물하기</Button>
      <Button type="buy">보관함 담기</Button>
    </div>
  );
};

export default BookBuyButtons;
