import React from "react";
import { Link } from "react-router-dom";

const TopInfoBar = () => {
  return (
    <div className="top-info-bar">
      <div className="container_lg">
        <div className="company-info">
          <ul>
            <li>
              <Link to="/">바로콘</Link>
            </li>
            <li>
              <Link to="/">매장안내</Link>
            </li>
            <li>
              <Link to="/">회원혜택</Link>
            </li>
          </ul>
        </div>
        <div className="my-info">
          <ul className="stick-list">
            <li>
              <Link to="/Login">로그인</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
            <li>
              <Link to="/">고객센터</Link>
            </li>
            <li>
              <Link to="/">주문배송</Link>
            </li>
            <li>
              <Link to="/">장바구니</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
