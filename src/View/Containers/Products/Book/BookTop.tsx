import React from "react";
import { IBook } from "Interfaces/IGoods";
import { Utils } from "Core/Utils";

interface IBookTop {
  id: string;
}
const BookTop = ({ id }: IBookTop) => {
  const categoryName = Utils.getBook(id);
  return <div className="book-top">탑</div>;
};

export default BookTop;
