import React from "react";
import "Styles/index.scss";
import Card1 from "View/Containers/Cards/GoodsCardNormal";

export default {
  title: "containers/GoodsCard",
  component: Card1,
};

const obj = {
  id: "123",
  name: "당근 유치원(양장본 HardCover)",
  subscript: "[유아(0~7세)]",
  img: "http://image.kyobobook.co.kr/images/book/large/484/l9788936455484.jpg",
  categoryId: "asd",
  subCategoryId: "ad",
};

export const GoodsCardNormal = () => {
  return <Card1 {...obj} />;
};
