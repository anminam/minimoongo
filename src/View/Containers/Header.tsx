import React from "react";
import HeaderForm from "./HeaderForm";
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";
import HeaderTopBanner from "View/Components/Events/TopBanner";

const Header = () => {
  return (
    <header id="container_header" className="container_lg">
      <div className="first_line">
        <HeaderLogo />
        <div className="header__banner">
          <HeaderTopBanner />
        </div>
        <HeaderForm />
      </div>
      <HeaderNavBar />
    </header>
  );
};

export default Header;
