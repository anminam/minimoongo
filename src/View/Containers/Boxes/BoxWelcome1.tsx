import React, { useState, useEffect } from "react";
import "Styles/index.scss";
import { TGoods } from "Interfaces/IGoods";
import { IEvent1 } from "Interfaces/IEventList";
import { Utils } from "Core/Utils";
import { NavUtils } from "Core/nav/utils";
import ListNormal from "../Lists/ListNormal";
import { useSelector } from "react-redux";
import { TRootState } from "Core/reducers";
import { Link } from "react-router-dom";

interface IBoxWelcome1 {
  eventObj: IEvent1;
  isBorder?: boolean;
}

interface IEventItem {
  id: string;
  title: string;
  href: string;
  list: TGoods[];
}

const BoxWelcome1 = ({ eventObj, isBorder = false }: IBoxWelcome1) => {
  const [title] = useState<string>(eventObj.title);
  const [href] = useState<string>(eventObj.href);
  const [index, setIndex] = useState<number>(0);

  const [eventItemList, setEventItemList] = useState<IEventItem[]>();

  const bookList = useSelector((state: TRootState) => {
    return state.goods.bookList;
  });

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
  }, [eventObj, bookList]);

  const handleMouseOver = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="box box-welcome1 container_lg">
      <h3 className="box__title">
        <Link to={href}>{title}</Link>
      </h3>
      <div className="box__contents">
        {eventItemList &&
          eventItemList.map((item, i) => {
            return (
              <div className="section" key={i}>
                <h3 className="section__title">
                  <a
                    href={item.href}
                    className={i === index ? "on" : ""}
                    onMouseOver={() => handleMouseOver(i)}
                  >
                    {item.title}
                  </a>
                </h3>
                <div
                  className={`section__contents ${isBorder ? "border" : ""}`}
                >
                  {i === index && <ListNormal goods={item.list} />}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BoxWelcome1;
