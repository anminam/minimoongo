import React from "react";
import { Link } from "react-router-dom";
/**
 * 메인 슬라이드 밑에
 */
const Welcome2 = () => {
  const imgPath = "assets/events/welcomes/welcome2/images/";
  const list = [
    {
      id: "01",
      imgSrc: "01.jpg",
    },
    {
      id: "02",
      imgSrc: "02.jpg",
    },
    {
      id: "03",
      imgSrc: "03.jpg",
    },
  ];

  return (
    <div className="welcome2">
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
