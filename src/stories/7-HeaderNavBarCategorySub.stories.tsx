import React from 'react';
import { bookCategories } from 'Core/StaticData';
import AllCategoryMenuSub from 'Components/AllCategoryMenuSub';
export default {
  title: 'AllCategoryMenuSub',
  component: AllCategoryMenuSub,
};

export const Main = () => {
  const title = 'x';
  return (
      <AllCategoryMenuSub />
  )
}