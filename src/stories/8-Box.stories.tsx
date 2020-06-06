import React from "react";
import BoxWelcome1 from "View/Containers/Boxes/BoxWelcome1";
import "Styles/index.scss";
import { IEvent1 } from "Interfaces/IEventList";

export default {
  title: "Box",
  component: BoxWelcome1,
};

const testList: IEvent1 = {
  title: "화재의 신간",
  href: "/",
  order: ["korbook", "otherbook", "ebook", "webnovel"],
  list: [
    "9788965963790",
    "9788993178692",
    "9788954671156",
    "9788950987749",
    "9791190299060",
    "9791158740757",
    "9791197016806",
    "9780547577319",
    "9780553509977",
    "9780547577098",
    "9780393354324",
    "9780374532505",
    "9780062691194",
    "9780099590088",
    "9780156012195",
    "9782330106485",
    "9780882848181",
    "9780674980822",
  ],
};

export const Main = () => {
  return <BoxWelcome1 eventObj={testList} />;
};
