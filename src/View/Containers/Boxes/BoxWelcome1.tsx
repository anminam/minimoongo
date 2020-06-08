import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IEvent1 } from "Interfaces/IEventList";
import { Utils } from "Core/Utils";
import { NavUtils } from "Core/nav/utils";
import ListNormal from "../Lists/ListNormal";

interface IBoxWelcome1 {
  eventObj: IEvent1;
}

interface IEventItem {
  id: string;
  title: string;
  href: string;
  list: TGoods[];
}

const BoxWelcome1 = ({ eventObj }: IBoxWelcome1) => {
  const [title] = useState<string>(eventObj.title);
  const [href] = useState<string>(eventObj.href);
  const [index, setIndex] = useState<number>(0);

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
          newList[index].list.push(book);
        }
      }
    });

    setEventItemList(newList);
  }, [eventObj]);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="box box-welcome1 left-title container_lg">
      <h3 className="title">
        <a href={href}>{title}</a>
      </h3>
      <div className="contents-container">
        {eventItemList &&
          eventItemList.map((item, i) => {
            return (
              <div className="section" key={i}>
                <h3>
                  <a
                    href={item.href}
                    className={i === index ? "on" : ""}
                    onMouseOver={() => handleMouseOver(i)}
                  >
                    {item.title}
                  </a>
                </h3>
                {i === index && <ListNormal goods={item.list} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BoxWelcome1;
