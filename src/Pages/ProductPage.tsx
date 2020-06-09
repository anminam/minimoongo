import React, { useState, useEffect } from "react";
import BookTop from "View/Containers/Products/Book/BookTop";

interface IProductPage {
  id: string;
  match?: any;
}

const ProductPage = ({ id, match }: IProductPage) => {
  const [pId, setPId] = useState<string>("");

  useEffect(() => {
    if (match) {
      setPId(match.params.id);
    }
  }, [match]);

  return (
    <div className="product-page">
      <div className="container_lg">
        <BookTop id={pId} />
      </div>
    </div>
  );
};

export default ProductPage;
