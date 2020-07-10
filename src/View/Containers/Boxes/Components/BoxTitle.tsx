import React from "react";
interface IBoxTitle {
  href: string;
  title: string;
}
const BoxTitle = ({ href, title }: IBoxTitle) => {
  return (
    <h2 className="box__title">
      <a href={href}>{title}</a>
    </h2>
  );
};

export default BoxTitle;
