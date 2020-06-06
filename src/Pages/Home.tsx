import React from "react";
import Welcome1 from "View/Containers/Welcomes/Welcome1";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import { connect } from "react-redux";
import { IGoods } from "Interfaces/IGoods";
import { event1 } from "Core/events/data";

interface IHome {
  list: IGoods[];
}
const Home = ({ list }: IHome) => {
  return (
    <div>
      <Welcome1 />
      <BoxWelcome1 eventObj={event1} />
    </div>
  );
};

const mapStateToProps = (state: any, props: any) => {
  const { bookList } = state.goods;

  return {
    list: bookList,
  };
};

export default connect(mapStateToProps)(Home);
