import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "Components/Button";

export default {
  title: "components/Button",
  component: Button,
};

export const verysmall = () => (
  <>
    <Button type="verysmall" marginRight="4px">
      당일배송
    </Button>
  </>
);
export const small = () => (
  <>
    <Button type="small" onClick={action("clicked")}>
      안내
    </Button>
    <div className="flex">
      <Button type="small" marginRight="2px">
        오늘의 책
      </Button>
      <Button type="small" marginRight="2px">
        무료배송
      </Button>
      <Button type="small" marginRight="2px">
        이밴트
      </Button>
      <Button type="small" marginRight="2px">
        사은품
      </Button>
      <Button type="small" marginRight="2px">
        경품
      </Button>
      <Button type="small" marginRight="2px">
        소득공제
      </Button>
    </div>
  </>
);

export const All = () => (
  <>
    <div>
      <Button type="verysmall" marginRight="4px">
        당일배송
      </Button>
    </div>
    <div>
      <Button type="small" onClick={action("clicked")}>
        안내
      </Button>
    </div>
  </>
);
