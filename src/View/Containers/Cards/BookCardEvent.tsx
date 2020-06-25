import React from "react";
import { ILink } from "Interfaces/ILink";
import { Utils } from "Core/Utils";
import { Link } from "react-router-dom";

const BookCardEvent = ({ id, src, path, displayName }: ILink) => {
  const link = Utils.getLinkOfProduct(id);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  const imgPath = `${path || ""}${src}`;

  return (
    <div className="event-book-card" onClick={handleCardClick}>
      <div className="event-book-card__cover">
        <Link to={path || "/"}>
          <img src={imgPath} alt={displayName} />
        </Link>
      </div>
    </div>
  );
};

export default BookCardEvent;
