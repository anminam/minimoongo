import React from 'react';
import BoxWelcome1 from 'View/Containers/Boxes/BoxWelcome1';
import "Styles/index.scss";
import { TGoods } from 'Interfaces/IGoods';

export default {
  title: 'Box',
  component: BoxWelcome1,
};

const testList:TGoods[] = [
    {
      id: "9791190382175",
      name: "더 해빙(The Having)(양장본 HardCover)",
      subscript: "1",
      img: "http://image.kyobobook.co.kr/images/book/large/175/l9791190382175.jpg",
      categoryId: 'korbook',
      author: '1',
      publisher: '1',
      price: 14400,
      sellPrice: 14400,
      productDate: '1',
  },
  {
      id: "9791196831059",
      name: "코로나 투자 전쟁",
      subscript: "1",
      img: "http://image.kyobobook.co.kr/images/book/large/059/l9791196831059.jpg",
      categoryId: 'korbook',
      author: '1',
      publisher: '1',
      price: 15120,
      sellPrice: 15120,
      productDate: '1',
  },
]

export const Main = () => {
  return (
      <BoxWelcome1 title={"화재의 신간"} href={'/'} list={testList} />
  )
}