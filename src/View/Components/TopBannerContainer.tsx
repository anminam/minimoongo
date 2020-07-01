import React, { useState } from "react";

const TopBannerContainer = () => {
  const src = "assets/images/top-banner.png";
  const [isOn, setIsOn] = useState<boolean>(true);

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setIsOn(false);
  };

  return (
    <div id="container-top-banner" className={" " + (isOn ? "on" : "")}>
      <div className="background">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <img
        className="container-top-banner__img"
        src={src}
        alt="장바구니 인기상품 최대 5천원 혜택, 폭염대비 여름 가전 얼리어버드 특가"
        style={{ height: "65px" }}
      />
      <button
        type="button"
        className="close-button"
        onClick={handleCloseClick}
      ></button>
    </div>
  );
};

export default TopBannerContainer;
