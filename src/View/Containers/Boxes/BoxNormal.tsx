import React, { useState } from "react";
import "Styles/index.scss";

interface IBoxNormal {
  eventObj: IEventItem;
  children: React.ReactNode;
}

interface IEventItem {
  id: string;
  title: string;
  href?: string;
}

const BoxNormal = ({ children, eventObj }: IBoxNormal) => {
  const [title] = useState<string>(eventObj.title);
  const [href] = useState<string>(eventObj.href || "/");

  return (
    <div className="box box-normal left-title container_lg">
      <h3 className="box__title">
        <a href={href}>{title}</a>
      </h3>
      <div className="box__contents">{children}</div>
    </div>
  );
};

export default BoxNormal;
