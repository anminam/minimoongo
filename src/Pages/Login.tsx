import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Mini from "Core/Mini";

const Login = () => {
  console.log(Mini.getAge());

  return (
    <div>
      <div className="box">
        <div className="container-1">
          <span className="icon">
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <FontAwesomeIcon icon={["fab", "microsoft"]} />
            <FontAwesomeIcon icon={["fab", "google"]} />
          </span>
          <input type="search" id="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Login;
