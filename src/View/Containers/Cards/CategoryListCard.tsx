import React, { useEffect, useState } from "react";
import { IGoods, IBook } from "Interfaces/IGoods";
import { NavUtils } from "Core/nav/utils";
import { Utils } from "Core/Utils";
import { ILink } from "Interfaces/ILink";

const CategoryListCard = ({ id, src, displayName }: ILink) => {
  // const categoryName = NavUtils.getCategoryName(categoryId);

  const link = Utils.getLinkOfProduct(id);
  const [item, setItem] = useState<IBook>();

  const categoryName = item?.categoryId;
  const summary = item?.subscript;

  useEffect(() => {
    const goods = Utils.getBook(id);
    setItem(goods);
  }, [id]);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  return (
    <div className="card1" onClick={handleCardClick}>
      <div className="card1__cover">
        {src && <img src={src} alt={displayName} />}
      </div>
      <div className="card1__contents">
        <div className="card1__contents__category">[{categoryName}]</div>
        <div className="card1__contents__title">
          <a href={link}>{displayName}</a>
        </div>
        <div className="card1__contents__summary">{summary}</div>
        <div className="card1__contents__price">
          <strong>14,400원</strong>
          <span>
            [10%
            <img
              src="http://image.kyobobook.co.kr/ink/images/common/icon_down04.gif"
              alt="할인"
            />
            +5%<b title="적립">P</b>]
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryListCard;
