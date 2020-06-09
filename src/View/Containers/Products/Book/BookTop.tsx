import React from "react";
import { Utils } from "Core/Utils";
import Button from "Components/Button";

interface IBookTop {
  id: string;
}
const BookTop = ({ id }: IBookTop) => {
  const categoryName = Utils.getBook(id);

  return (
    <div className="book-top">
      {/* 왼쪽 */}
      <div className="detail-info">
        <div className="book-cover">
          <div className="book-cover__image-container">
            <img src={categoryName?.img} alt={categoryName?.name} />
          </div>
          <div className="book-cover__btn-container">
            <ul className="book-cover__btn-container__list">
              <li>
                <a href="/#" onClick={() => 0}>
                  크게보기
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  미리보기
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="book-location">
          <button>매장 재고 · 위치</button>
        </div>
        <div className="book-keyword">
          <h2>키워드 Pick</h2>
          <Button size="small" text="안내" />

          <div className="book-keyword__list">
            <ul>
              <li>
                <a href="/#" onClick={() => 0}>
                  구루
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  심리학
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  행운
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  부자
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  뇌과학
                </a>
              </li>
              <li>
                <a href="/#" onClick={() => 0}>
                  인공지능
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="product-info">
        <div className="wapper-contianer">
          <div className="flex">
            <Button text="오늘의 책" size="verysmall" />
            <Button text="무로배송" size="verysmall" />
            <Button text="이밴트" size="verysmall" />
            <Button text="사은품" size="verysmall" />
            <Button text="경품" size="verysmall" />
            <Button text="소득공제" size="verysmall" />
          </div>
          <div className="title-container">
            <h1 className="title">{categoryName?.name}</h1>
          </div>
          <div className="author-container">
            <ul className="flex">
              <li>
                <p>{categoryName?.author} 지음</p>
              </li>
              <li>
                <p>{categoryName?.publisher}</p>
              </li>
              <li>
                <p>{categoryName?.productDate}</p>
              </li>
            </ul>
          </div>
          <div className="review-container">
            <div>{categoryName?.rate}</div>
            <div>리뷰 56개</div>
          </div>
          <div className="rank-container">
            <div>국내도서 주간베스트 1위</div>
            <div>자기계발 주간베스트 1위</div>
          </div>
        </div>
        <div className="wapper-contianer">
          <div className="price-container">정가 : {categoryName?.price}</div>
          <div className="sell-price-container">
            판매가 :
            <span className="price">
              <strong>{categoryName?.sellPrice}</strong> 원
            </span>
          </div>
          <div className="point-container">
            통합포인트: [기본적립]{" "}
            {categoryName?.sellPrice ? categoryName.price * 0.1 : "100"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTop;
