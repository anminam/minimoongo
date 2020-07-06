import React from "react";
import { Utils } from "Core/Utils";
import { ILink } from "Interfaces/ILink";

const CategoryListCard = ({
  id,
  src,
  displayName,
  subCategoryText,
  summaryText,
  price,
}: ILink) => {
  const link = Utils.getLinkOfProduct(id);
  const _price = Utils.formmatPrice(price || "0");

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  return (
    <div className="card1" onClick={handleCardClick}>
      <div className="card1__cover">
        {src && <img src={src} alt={displayName} />}
      </div>
      <div className="card1__contents">
        <div className="card1__contents__category">[{subCategoryText}]</div>
        <div className="card1__contents__title">
          <a href={link}>{displayName}</a>
        </div>
        {summaryText && (
          <div className="card1__contents__summary">{summaryText}</div>
        )}
        <div className="card1__contents__price">
          <strong>{_price}원</strong>
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
