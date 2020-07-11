import React, { useEffect } from "react";
import Welcome1 from "View/Containers/Welcomes/Welcome1";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import { connect } from "react-redux";
import { IGoods } from "Interfaces/IGoods";
import {
  event1,
  eventPicks,
  mainWelcome2Event,
  mainTodayBookSliderEvent,
  mainPageStoryK,
} from "Core/events/data";
import BoxWelcomePicks from "View/Containers/Boxes/BoxWelcomePicks";
import Welcome2 from "View/Containers/Welcomes/Welcome2";
import Welcome3 from "View/Containers/Welcomes/Welcome3";
import BoxEvent from "View/Containers/Boxes/BoxEvent";
import BoxNormal from "View/Containers/Boxes/BoxNormal";
import ListMap from "View/Containers/Lists/ListMap";
import ListCircles from "View/Containers/Lists/ListCircles";

interface IHome {
  list: IGoods[];
}
const Home = ({ list }: IHome) => {
  useEffect(() => {}, [list]);
  return (
    <div className="page homepage">
      <Welcome1 />
      <Welcome2 eventObj={mainWelcome2Event} isFull={true} />
      <Welcome3 />
      <div className="wapper-content container_lg">
        <BoxEvent eventObj={mainTodayBookSliderEvent} isBorder={true} />
      </div>

      <div className="wapper-content">
        <BoxWelcome1 eventObj={event1} />
      </div>
      <div className="wapper-content">
        <BoxWelcomePicks eventObj={eventPicks} />
      </div>
      <div className="wapper-content container_lg">
        <BoxNormal eventObj={mainPageStoryK} height={712}>
          <ListCircles list={mainPageStoryK.list[0].list} />
        </BoxNormal>
      </div>
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
