import React from "react";
import { Link } from "react-router-dom";
interface IBoxMoreButton {
  href: string;
}
const BoxMoreButton = ({ href }: IBoxMoreButton) => {
  return (
    <div className="box__more">
      <Link to={href}>더보기 +</Link>
    </div>
  );
};

export default BoxMoreButton;
