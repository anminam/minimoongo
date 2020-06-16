import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { mini } from "Core/Mini";

const Login = () => {
  console.log(mini.getAge(), mini.utils.getBook("9788965422785"));

  return (
    <div className="input mini">
      <div className="box">
        <div className="container-1">
          <span className="icon">
            <FontAwesomeIcon icon={faCoffee} />
          </span>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
      <div className="box">
        <div className="container-2">
          <span className="icon">
            <FontAwesomeIcon icon={faCoffee} />
          </span>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

{
  /* <FontAwesomeIcon icon={["fab", "google"]} /> */
}
export default Login;
