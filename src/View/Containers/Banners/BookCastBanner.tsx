import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { Link } from "react-router-dom";

const BookCastBanner = () => {
  const [firstTitle, setFirstTitle] = useState<string>();
  const [firstSubTitle, setFirstSubTitle] = useState<string>();

  useEffect(() => {
    setFirstTitle("[5컷만화] 독자를 위해 태어난 책");
    setFirstSubTitle("좋은책의 재발견 teaser#2");
  }, []);

  return (
    <div className="book-cast-banner banner">
      <div className="title-container">
        <h2>출판사 북캐스트</h2>
        <p>거의 모든, 책 이야기</p>
      </div>
      <div className="title-and-img-container">
        <div className="cover">
          <img
            src="http://image.kyobobook.co.kr/ink/images/prom/2020/bookcast/06/bn_08.jpg"
            alt={firstTitle}
          />
        </div>
        <div className="title">{firstTitle}</div>
        <p className="sub-title">{firstSubTitle}</p>
      </div>
      <div className="other-list">
        <ul>
          <li>
            <Link to="/">[4컷만화] 난 눈이 마주쳤을 뿐</Link>
          </li>
          <li>
            <Link to="/">즐겁게 시작하는 제로웨이스트</Link>
          </li>
          <li>
            <Link to="/">잠자기 전 읽어볼까?</Link>
          </li>
          <li>
            <Link to="/">봄을 누리지 못한 당신에게</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCastBanner;
