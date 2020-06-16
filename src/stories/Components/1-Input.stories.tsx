import React from "react";
import Input1 from "Components/Input1";

export default {
  title: "components/label",
  component: Input1,
};

export const noLabel = () => (
  <>
    <Input1 id="noLabel" />
  </>
);
export const label = () => (
  <>
    <Input1 id="label" label="id" type="text" />
    <Input1 id="label" label="password" type="password" />
  </>
);
