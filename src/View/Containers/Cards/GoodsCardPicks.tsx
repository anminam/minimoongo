import React from "react";
import { IEventPicks } from "Interfaces/IEventList";
import { Link } from "react-router-dom";

const GoodsCardPicks = ({
  title,
  href,
  list,
  className,
  likeCategory,
  likeAuthor,
  cicleOfReading,
  rankOfReading,
}: IEventPicks) => {
  return (
    <div className="card picks">
      <Link to="/">
        <div className="card__title">{className}</div>
        {/* <div className="card__container"> */}
        <img
          className="card__img"
          alt={title}
          src="http://image.kyobobook.co.kr/ink/images/welcome/bg_picks.png"
        />
        {/* </div> */}
        <div className="card__contents">
          <ul>
            <li>&gt; 선호분야 : {likeCategory}</li>
            <li>&gt; 선호작가 : {likeAuthor}</li>
            <li>&gt; 독서주기 : 한달 {cicleOfReading}권</li>
            <li>&gt; 독서등급 : LV.{rankOfReading}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default GoodsCardPicks;
