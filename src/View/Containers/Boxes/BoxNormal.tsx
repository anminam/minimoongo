import React, { useState } from "react";
import "Styles/index.scss";
import BoxTitle from "./Components/BoxTitle";
import BoxContents from "./Components/BoxContents";
import { IEvent } from "Interfaces/IEventList";

interface IBoxNormal {
  eventObj: IEvent;
  children: React.ReactNode;
  height?: number; // 추후 삭제하는 방향으로...
}

const BoxNormal = ({ children, eventObj, height }: IBoxNormal) => {
  const [title] = useState<string>(eventObj.displayName);
  const [href] = useState<string>(eventObj.href || "/");

  const style = {
    height: height || 340,
  };

  return (
    <div className="box box-normal" style={style}>
      <BoxTitle href={href} title={title} />
      <BoxContents eventObj={eventObj}>{children}</BoxContents>
    </div>
  );
};

export default BoxNormal;
