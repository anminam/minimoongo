import React from "react";
import { ILink } from "Interfaces/ILink";
import { Utils } from "Core/Utils";
import { Link } from "react-router-dom";

const BookCardEvent = ({ id, src, path }: ILink) => {
  const link = Utils.getLinkOfProduct(id);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = link;
  };

  return (
    <div className="event-book-card" onClick={handleCardClick}>
      <div className="event-book-card__cover">
        <Link to="/">
          <img src={src} alt="name" />
        </Link>
      </div>
    </div>
  );
};

export default BookCardEvent;
