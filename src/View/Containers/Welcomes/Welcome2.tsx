import React from "react";
import { Link } from "react-router-dom";
import { IEventListItem } from "Interfaces/IEventList";
/**
 * 메인 슬라이드 밑에
 */

interface IWelcome2 {
  eventObj: IEventListItem;
  isFull?: boolean;
}
const Welcome2 = ({ eventObj, isFull = false }: IWelcome2) => {
  return (
    <div className="welcome2">
      <div className={`container ${isFull ? "full" : ""}`}>
        <ul className={` ${isFull ? "container_lg" : "border"} flex`}>
          {eventObj &&
            eventObj.list.map((item, i) => (
              <li className="item" key={i}>
                <Link to={`${item.id}`}>
                  <img alt={item.id} src={`${eventObj.imagePath}${item.src}`} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Welcome2;
