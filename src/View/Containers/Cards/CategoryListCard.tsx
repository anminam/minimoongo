import React from "react";
import { IGoods } from "Interfaces/IGoods";
import { NavUtils } from "Core/nav/utils";
import { Utils } from "Core/Utils";
import { ILink } from "Interfaces/ILink";

const CategoryListCard = ({ id, src, displayName }: ILink) => {
  // const categoryName = NavUtils.getCategoryName(categoryId);
  const categoryName = "헝";
  const link = Utils.getLinkOfProduct(id);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  return (
    <div className="card1" onClick={handleCardClick}>
      <div className="card1__cover">
        {src && <img src={src} alt={displayName} />}
      </div>
      <div className="card1__contents">
        <p className="card1__contents__category">[{categoryName}]</p>
        <p className="card1__contents__title">
          <a href={link}>{displayName}</a>
        </p>
      </div>
    </div>
  );
};

export default CategoryListCard;
