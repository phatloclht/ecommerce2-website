import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';
import Discount from '../components/discount/Discount';
import Shop from '../components/shop/Shop';
import Annocument from '../components/annocument/Annocument';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;
