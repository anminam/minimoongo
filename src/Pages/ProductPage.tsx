import React from "react";
import BookTop from "View/Containers/Products/Book/BookTop";

interface IProductPage {
  id: string;
}

const ProductPage = ({ id }: IProductPage) => {
  return (
    <div className="container_lg">
      <BookTop id={id} />
    </div>
  );
};

export default ProductPage;
