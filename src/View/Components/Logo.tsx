import React from "react";
import { Link } from "react-router-dom";

interface ILogo {
  width?: string;
}
const Logo = ({ width }: ILogo) => {
  const src = "assets/images/minilogo.png";

  const style = {
    width: width || "",
  };

  return (
    <>
      <Link to="/">
        <img
          src={src}
          style={style}
          alt="미니문고 로고"
          className="header__logo__img"
        />
      </Link>
    </>
  );
};

export default Logo;
