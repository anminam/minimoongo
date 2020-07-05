import React from "react";
import Logo from "View/Components/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="sitemap-container">
        <ul className="sitemap-container__list stick-list container_lg">
          <li>
            <a href="/">회사소개</a>
          </li>
          <li>
            <a href="/">이용약관</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">고객센터</a>
          </li>
          <li>
            <a href="/">협력사여러분</a>
          </li>
          <li>
            <a href="/">제휴·제안</a>
          </li>
          <li>
            <a href="/">광고문의</a>
          </li>
          <li>
            <a href="/">채용정보</a>
          </li>
          <li>
            <a href="/">서비스 전체보기</a>
          </li>
        </ul>
      </div>
      <div className="content-container">
        <div className="container_lg">
          <div className="logo-container">
            <Logo />
          </div>
          <address>
            서울시 은평구 은평터널로 1004 &nbsp; ㈜ 미니문고 &nbsp; 대표이사 :
            안미남
          </address>
          <div className="company">
            <p>사업자등록번호 : 를 못받았습니다</p>
            <strong className="big">
              대표전화 : 는 없습니다 (발신자 부담전화)
            </strong>
            &nbsp; 팩스 : 도 없습니다 (지역번호공통)
            <p>
              서울특별시 통신판매업신고번호 : 제 없습니다 호 ▶
              <a
                href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1028111670"
                target="blank"
                title="새 창 열림"
              >
                사업자정보확인
              </a>
            </p>
          </div>
          <p className="copyright">
            COPYRIGHT(C) <strong>MINI BOOK CENTRE</strong> ALL RIGHTS RESERVED.
          </p>
          <div className="lg_area">
            <p>
              LG U+ 구매안전서비스 &nbsp; ▶
              <a
                href="http://www.kyobobook.co.kr/prom/EscrowJoinConfirm.jsp?orderClick=rXn"
                //   onclick="window.open(this.href,'lguplus','scrollbars=yes,width=358,height=278');return false;"
                title="새 창 열림"
              >
                서비스 가입 확인
              </a>
              <br />
              고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
              LG유플러스의 구매안전서비스를 이용하실 수 있습니다.
            </p>
          </div>
          <div className="mark_isms">
            <Link to="/">정보보호관리체계 ISMS 인증획득하지 못함</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
