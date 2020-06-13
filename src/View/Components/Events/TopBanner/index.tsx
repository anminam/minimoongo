import React, { useState } from "react";
import { bannerTop } from "Core/events/data";
import Button from "Components/Button";
import { ILink } from "Interfaces/ILink";

const HeaderTopBanner = () => {
  const path = "assets/events/topbanners/images/";

  const [list] = useState<ILink[]>(bannerTop.list);
  const [nowNum, setNowNum] = useState<number>(0);
  const [max] = useState<number>(bannerTop.list.length);

  const handlePrevClick = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    event.preventDefault();

    if (nowNum > 0) {
      setNowNum(nowNum - 1);
    } else {
      setNowNum(max - 1);
    }
  };
  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    event.preventDefault();

    if (nowNum < max - 1) {
      setNowNum(nowNum + 1);
    } else {
      setNowNum(0);
    }
  };

  return (
    <div className="header-top-banner">
      <ul>
        {list.map((item, i) => {
          if (nowNum !== i) {
            return false;
          }
          return (
            <li>
              <a href={item.href}>
                <img src={path + item.src} alt={item.displayName} />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="header-top-banner__label">
        <span className="first">{nowNum + 1}</span> /{" "}
        <span className="second">{max}</span>
      </div>
      <div className="header-top-banner__buttons">
        <Button type="bannerPrev" onClick={handlePrevClick} />
        <Button type="bannerNext" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default HeaderTopBanner;