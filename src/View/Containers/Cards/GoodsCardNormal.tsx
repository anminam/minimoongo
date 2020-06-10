import React from "react";
import { IGoods } from "Interfaces/IGoods";
import { NavUtils } from "Core/nav/utils";
import { Utils } from "Core/Utils";

const GoodsCardNormal = ({ name, categoryId, img, id }: IGoods) => {
  const categoryName = NavUtils.getCategoryName(categoryId);
  const link = Utils.getLinkOfProduct(id);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card__cover">{img && <img src={img} alt={name} />}</div>
      <div className="card__contents">
        <p className="card__contents__category">[{categoryName}]</p>
        <p className="card__contents__title">
          <a href={link}>{name}</a>
        </p>
      </div>
    </div>
  );
};

export default GoodsCardNormal;
