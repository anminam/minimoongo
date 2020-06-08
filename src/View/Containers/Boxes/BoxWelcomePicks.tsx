import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IEventPicks } from "Interfaces/IEventList";
import { Utils } from "Core/Utils";
import { NavUtils } from "Core/nav/utils";
import ListPicks from "../Lists/ListPicks";
import { eventPicks } from "Core/events/data";

interface IBoxWelcomePicks {
  eventObj: IEventPicks;
}

interface IEventItem {
  id: string;
  title: string;
  href: string;
  list: TGoods[];
}

const BoxWelcomePicks = ({ eventObj }: IBoxWelcomePicks) => {
  const [title, setTitle] = useState<string>(eventObj.title);
  const [href] = useState<string>(eventObj.href);
  const [index, setIndex] = useState<number>(0);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [personName, setPersonName] = useState<string>("○○○");

  const [eventItemList, setEventItemList] = useState<IEventItem[]>();

  useEffect(() => {
    const list = eventObj.list;
    const newList: IEventItem[] = [];

    list.forEach((i) => {
      const book = Utils.getBook(i);
      if (book) {
        const { categoryId } = book;
        const index = Utils.findIndex(newList, categoryId);
        // 없으면
        if (index === -1) {
          newList.push({
            id: categoryId,
            title: NavUtils.getCategoryName(categoryId),
            href: "",
            list: [book],
          });
        } else {
          newList[0].list.push(book);
        }
      }
    });

    setEventItemList(newList);
  }, [eventObj]);

  useEffect(() => {
    let newTitle = eventObj.title;
    if (isLogin) {
      newTitle = "네임넣자"; //
    } else {
      newTitle = "○○○";
    }
    setPersonName(newTitle);
  }, [isLogin]);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="box box-welcome-picks left-title container_lg">
      <h3 className="title">
        <a href={href}>
          {personName + title}{" "}
          {!isLogin && <p>[로그인 하고 나만의 AI 맞춤추천 받아보세요]</p>}
        </a>
      </h3>
      <div className="contents-container">
        {eventItemList &&
          eventItemList.map((item, i) => {
            return (
              <div className="section" key={i}>
                {i === index && (
                  <ListPicks
                    goods={item.list}
                    pickItem={eventPicks}
                    itemLength={3}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BoxWelcomePicks;
