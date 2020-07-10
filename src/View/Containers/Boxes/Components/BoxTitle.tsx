import React from "react";
import { Link } from "react-router-dom";
interface IBoxTitle {
  href: string;
  title: string;
}
const BoxTitle = ({ href, title }: IBoxTitle) => {
  return (
    <h2 className="box__title">
      <Link to={href}>{title}</Link>
    </h2>
  );
};

export default BoxTitle;
