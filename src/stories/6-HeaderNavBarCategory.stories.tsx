import React from 'react';
import AllCategoryMenu from 'Components/AllCategoryMenu';
import { navItemList } from 'Core/StaticData';
export default {
  title: 'AllCategoryMenu',
  component: AllCategoryMenu,
};

export const Main = () => {
  return (
      <AllCategoryMenu list={navItemList} visible={true}/>
  )
}