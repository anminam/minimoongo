import React from "react";
import { IMainCategory } from "Interfaces/IMainCategory";
import { connect } from "react-redux";
import AllCategory from "View/Components/AllCategory";
import HeaderNav from "View/Components/HeaderNav";

interface IHaderNavBar {
  list: IMainCategory[];
}

const HeaderNavBar = ({ list }: IHaderNavBar) => {
  return (
    <div className="header__navbar container_lg">
      <AllCategory list={list} />
      <HeaderNav list={list} />
    </div>
  );
};

const mapStateToProps = (state: any, props: any) => {
  const { list } = state.nav;

  return {
    list,
  };
};

export default connect(mapStateToProps)(HeaderNavBar);
