import React from "react";

interface IProductPage {
  id: string;
}

const ProductPage = ({ id }: IProductPage) => {
  return (
    <div className="container_lg">
      <div>굿즈맨</div>
    </div>
  );
};

export default ProductPage;
