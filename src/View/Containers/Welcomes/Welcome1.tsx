import React from "react";
import WelcomeMainEvent from "./WelcomeMainEvent";
import { mainEventList } from "Core/data";
import BookCastBanner from "../Banners/BookCastBanner";

const Welcome1 = () => {
  return (
    <div>
      <div className="container_lg flex">
        <WelcomeMainEvent list={mainEventList} />
        <BookCastBanner />
      </div>
    </div>
  );
};

export default Welcome1;
