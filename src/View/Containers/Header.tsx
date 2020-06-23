import React, { useEffect, useRef, useState } from "react";
import HeaderForm from "./HeaderForm";
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";
import HeaderTopBanner from "View/Components/Events/TopBanner";

const Header = () => {
  const useScroll = () => {
    const [scroll, setScroll] = useState({ x: 0, y: 0 });

    const onScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return scroll;
  };

  const { x, y } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  let offsetY = ref.current?.offsetTop || 0 + 50;

  console.log(y, offsetY);

  return (
    <header id="container_header">
      <div className="first_line container_lg">
        <HeaderLogo />
        <div className="header__banner">
          <HeaderTopBanner />
        </div>
        <HeaderForm />
      </div>
      <div
        ref={ref}
        className={`wapper-header__navbar ${y >= offsetY ? "stiky" : ""}`}
      >
        <HeaderNavBar />
      </div>
    </header>
  );
};

export default Header;
