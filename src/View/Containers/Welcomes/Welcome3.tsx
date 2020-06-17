import React from "react";
import { Link } from "react-router-dom";
/**
 * 메인 슬라이드 밑에
 */
const Welcome2 = () => {
  const imgPath = "assets/events/welcomes/welcome3/images/";
  const list = [
    {
      id: "bnL_02",
      imgSrc: "bnL_02.jpg",
    },
    {
      id: "bnG_w02",
      imgSrc: "bnG_w02.jpg",
    },
    {
      id: "bnG_05",
      imgSrc: "bnG_05.jpg",
    },
  ];

  return (
    <div className="welcome3">
      <div className="container_lg flex">
        {list &&
          list.map((item, i) => (
            <div className="item" key={i}>
              <Link to={`${item.id}`}>
                <img alt={item.id} src={`${imgPath}${item.imgSrc}`} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Welcome2;
