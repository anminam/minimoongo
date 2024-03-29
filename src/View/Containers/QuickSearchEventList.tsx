import React, { useState, MouseEvent } from "react";
import { ILink } from "Interfaces/ILink";
import Button from "View/Components/Button";
import { Link } from "react-router-dom";

const dummy: ILink[] = [
  {
    id: "abc1",
    displayName: "프로그램 완전정복",
    href: "/",
  },
  {
    id: "abc2",
    displayName: "js 완전 잘하기",
    href: "/",
  },
  {
    id: "abc3",
    displayName: "김재성 신작",
    href: "/",
  },
  {
    id: "abc4",
    displayName: "삼성화재 이대로괜찮은가",
    href: "/",
  },
  {
    id: "abc5",
    displayName: "똑똑한사람의 선택",
    href: "/",
  },
  {
    id: "abc6",
    displayName: "나는 시키는대로 살것이다",
    href: "/",
  },
  {
    id: "abc7",
    displayName: "보여주기 위한 삶",
    href: "/",
  },
];

const QuickSearchEventList = () => {
  const maxLength = 4;

  const [list] = useState<ILink[]>(dummy);
  const [nowNum, setNowNum] = useState<number>(0);

  const handlePrevClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    event.preventDefault();

    if (nowNum > 0) {
      setNowNum(nowNum - 1);
    } else {
      const max = Math.floor(list.length / maxLength);
      setNowNum(max);
    }
  };
  const handleNextClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    event.preventDefault();

    const max = Math.floor(list.length / maxLength);
    if (nowNum < max) {
      setNowNum(nowNum + 1);
    } else {
      setNowNum(0);
    }
  };

  return (
    <div className="container-quick-search">
      <ul className="stick-list">
        {list &&
          list.map((item, i) => {
            const min = nowNum * maxLength;
            const max = min + maxLength;

            if (!(min <= i && i < max)) {
              return false;
            }
            return (
              <li key={item.id}>
                <Link to={item.href || "/"}>{item.displayName}</Link>
              </li>
            );
          })}
      </ul>
      <div className="container-quick-search__buttons">
        <Button type="bannerPrev" onClick={handlePrevClick} />
        <Button type="bannerNext" onClick={handleNextClick} />
        {/* <button className="prev" onClick={handlePrevClick}>
          -
        </button>
        <button className="next" onClick={handleNextClick}>
          +
        </button> */}
      </div>
    </div>
  );
};

export default QuickSearchEventList;
