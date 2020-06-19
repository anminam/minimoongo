import React, { useEffect } from "react";
import Welcome1 from "View/Containers/Welcomes/Welcome1";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import { connect } from "react-redux";
import { IGoods } from "Interfaces/IGoods";
import { event1, eventPicks } from "Core/events/data";
import BoxWelcomePicks from "View/Containers/Boxes/BoxWelcomePicks";
import Welcome2 from "View/Containers/Welcomes/Welcome2";
import Welcome3 from "View/Containers/Welcomes/Welcome3";

interface IHome {
  list: IGoods[];
}
const Home = ({ list }: IHome) => {
  useEffect(() => {}, [list]);
  return (
    <div>
      <Welcome1 />
      <Welcome2 />
      <Welcome3 />
      <BoxWelcome1 eventObj={event1} />
      <BoxWelcomePicks eventObj={eventPicks} />
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
