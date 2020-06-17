import React, { useState } from "react";
import WelcomeMainEvent from "./WelcomeMainEvent";
import { mainEventList } from "Core/data";
import BookCastBanner from "../Banners/BookCastBanner";

/**
 * 메인에 슬라이더
 */
const Welcome1 = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("white");

  const handleColor = (color: string | undefined) => {
    if (color) {
      setBackgroundColor(color);
    }
  };

  return (
    <div
      className="wapper-welcome-main-event"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="container_lg flex">
        <WelcomeMainEvent list={mainEventList} onChangeColor={handleColor} />
        <BookCastBanner />
      </div>
    </div>
  );
};

export default Welcome1;
