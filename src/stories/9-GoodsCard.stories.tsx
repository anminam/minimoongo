import React from "react";
import "Styles/index.scss";
import GoodsCard1 from "View/Containers/Cards/GoodsCard1";

export default {
  title: "GoodsCard",
  component: GoodsCard1,
};

const obj = {
  id: "123",
  name: "당근 유치원(양장본 HardCover)",
  subscript: "[유아(0~7세)]",
  img: "http://image.kyobobook.co.kr/images/book/large/484/l9788936455484.jpg",
  categoryId: "asd",
  subCategoryId: "ad",
};

export const Card1 = () => {
  return <GoodsCard1 {...obj} />;
};
