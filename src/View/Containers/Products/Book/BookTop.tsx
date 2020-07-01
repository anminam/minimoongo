import React, { useState, useEffect } from "react";
import { Utils } from "Core/Utils";
import Button from "View/Components/Button";
import { IDate } from "Interfaces/IDate";
import InputAndButton from "View/Containers/InputAndButton";
import BookBuyButtons from "View/Containers/BookBuyButtons";

interface IBookTop {
  id: string;
}
const BookTop = ({ id }: IBookTop) => {
  // const [categoryItem, setCategoryItem] = useState<IBook>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [author, setAuthor] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [productDate, setProductDate] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [dateObj] = useState<IDate>(Utils.today());

  useEffect(() => {
    const pCategoryItem = Utils.getBook(id);
    if (pCategoryItem) {
      setName(pCategoryItem.name);
      // setCategoryItem(pCategoryItem);
      setPrice(pCategoryItem.price);
      setSellPrice(pCategoryItem.sellPrice);
      setAuthor(pCategoryItem.author);
      setPublisher(pCategoryItem.publisher);
      setProductDate(pCategoryItem.productDate);
      setImg(pCategoryItem.img);
      setRate(pCategoryItem.rate || "0");
    }
  }, [id]);

  return (
    <div className="book-top">
      {/* 왼쪽 */}
      <div className="detail-info">
        <div className="book-cover">
          <div className="book-cover__image-container">
            <img src={img} alt={name} />
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
          <Button type="small">안내</Button>

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
            <Button type="verysmall" marginRight="2px">
              오늘의 책
            </Button>
            <Button type="verysmall" marginRight="2px">
              무료배송
            </Button>
            <Button type="verysmall" marginRight="2px">
              이밴트
            </Button>
            <Button type="verysmall" marginRight="2px">
              사은품
            </Button>
            <Button type="verysmall" marginRight="2px">
              경품
            </Button>
            <Button type="verysmall" marginRight="2px">
              소득공제
            </Button>
          </div>
          <div className="title-container">
            <h1 className="title">{name}</h1>
          </div>
          <div className="author-container">
            <ul className="stick-list">
              <li>
                <p>{author} 지음</p>
              </li>
              <li>
                <p>{publisher}</p>
              </li>
              <li>
                <p>{productDate} 출판</p>
              </li>
            </ul>
          </div>
          <div className="review-container">
            <ul className="stick-list">
              <li>
                <span>{rate}</span>
              </li>
              <li>
                <span>리뷰 56개</span>
              </li>
              <li>
                <Button type="small">리뷰쓰기</Button>
              </li>
            </ul>
          </div>
          <div className="rank-container">
            <ul className="stick-list">
              <li>
                <a href="/bestSellerNew/bestseller.laf?mallGb=KOR&amp;range=0&amp;kind=0&amp;orderClick=JAT">
                  국내도서 주간베스트 <em>130</em>위
                </a>
              </li>
              <li>
                <a href="/bestSellerNew/bestseller.laf?mallGb=KOR&amp;range=0&amp;kind=0&amp;orderClick=JAT">
                  자기계발 주간베스트 <em>130</em>위
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wapper-contianer">
          <div className="price-container">
            <dl className="price">
              <dt>정가</dt>
              <dd>{Utils.numComma(price)} 원</dd>
            </dl>
          </div>
          <div className="sell-price-container">
            <dl className="price">
              <dt>판매가</dt>
              <dd>
                <strong>{Utils.numComma(sellPrice)}</strong> 원
              </dd>
            </dl>
          </div>
          <div className="point-container">
            <dl className="multi-dl">
              <dt>통합포인트</dt>
              <dd>
                <dl>
                  <dt>[기본적립]</dt>
                  <dd>
                    {Utils.numComma(sellPrice ? sellPrice * 0.1 : 100)} 원 적립
                  </dd>
                </dl>
                <dl>
                  <dt>[추가적립]</dt>
                  <dd>
                    5만원 이상 구매 시 2천원 추가적립{" "}
                    <Button type="small">안내</Button>
                  </dd>
                </dl>
                <dl>
                  <dt>[회원혜택]</dt>
                  <dd>
                    실버등급 이상, 3만원 이상 구매 시 2~4% 추가적립{" "}
                    <Button type="small">안내</Button>
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>추가혜택</dt>
              <dd className="inline-block">
                <div className="flex">
                  <Button type="small" marginRight="2px">
                    오늘의 책
                  </Button>
                  <Button type="small" marginRight="2px">
                    무료배송
                  </Button>
                  <Button type="small" marginRight="2px">
                    이밴트
                  </Button>
                  <Button type="small" marginRight="2px">
                    사은품
                  </Button>
                  <Button type="small" marginRight="2px">
                    경품
                  </Button>
                  <Button type="small" marginRight="2px">
                    소득공제
                  </Button>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="wapper-contianer">
          <div className="container">
            <dl>
              <dt>배송비</dt>
              <dd>
                무료 <Button type="small">배송비 안내</Button>
              </dd>
            </dl>
          </div>
          <div className="delivery-container">
            <dl>
              <dt>배송비일정</dt>
              <dd>
                <div>
                  서울특별시 종로구 세종대로 기준{" "}
                  <Button type="small">지역변경</Button>
                </div>
                <div>
                  <Button type="verysmall" marginRight="4px">
                    당일배송
                  </Button>
                  지금 주문하면{" "}
                  <em>
                    오늘({`${dateObj.date}일, ${dateObj.korDay}`}) 도착 예정
                  </em>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="wapper-contianer">
          <div className="container">
            <dl>
              <dt style={{ lineHeight: "30px" }}>주문수량</dt>
              <dd>
                <InputAndButton />
              </dd>
            </dl>
          </div>
          <div className="container">
            <BookBuyButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTop;
