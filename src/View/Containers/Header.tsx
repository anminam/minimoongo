import React, { useEffect, useRef, useState } from "react";
import HeaderForm from "./HeaderForm";
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";
import HeaderTopBanner from "View/Components/Events/TopBanner";
import useSticky from "Core/Hooks/useSticky";

const Header = () => {
  return (
    <header id="container_header">
      <div className="first_line container_lg">
        <HeaderLogo />
        <div className="header__banner">
          <HeaderTopBanner />
        </div>
        <HeaderForm />
      </div>
      <div className={`wapper-header__navbar sticky`}>
        <HeaderNavBar />
      </div>
    </header>
  );
};

export default Header;
