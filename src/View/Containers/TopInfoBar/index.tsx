import React from "react";
import { Link } from "react-router-dom";

const TopInfoBar = () => {
  return (
    <div className="top-info-bar">
      <div className="container_lg">
        <div className="company-info">
          <ul>
            <li>
              <a href="/">바로콘</a>
            </li>
            <li>
              <a href="/">매장안내</a>
            </li>
            <li>
              <a href="/">회원혜택</a>
            </li>
          </ul>
        </div>
        <div className="my-info">
          <ul className="stick-list">
            <li>
              <Link to="Login">로그인</Link>
            </li>
            <li>
              <a href="/">회원가입</a>
            </li>
            <li>
              <a href="/">고객센터</a>
            </li>
            <li>
              <a href="/">주문배송</a>
            </li>
            <li>
              <a href="/">장바구니</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
