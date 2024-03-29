import React from "react";
import { ILink } from "Interfaces/ILink";
import { Utils } from "Core/Utils";

interface IBookCardEvent {
  obj: ILink;
  isNotOpen?: boolean; // style 옵션 책이 열리는 모션
  isLink?: boolean; // 링크 이벤트여부
}
const BookCardEvent = ({ obj, isNotOpen, isLink = true }: IBookCardEvent) => {
  const { id, src, path, displayName } = obj;

  const link = Utils.getLinkOfProduct(id);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isLink) {
      window.location.href = link;
    }
  };

  const imgPath = `${path || ""}${src}`;

  return (
    <div className="event-book-card" onClick={handleCardClick}>
      <div className="event-book-card__cover">
        {/* <Link to={path || "#"}> */}
        <img
          src={imgPath}
          alt={displayName}
          className={`${isNotOpen === true ? "not_open" : ""}`}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default BookCardEvent;
