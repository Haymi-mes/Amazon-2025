import React from 'react'
import LayOut from '../../Components/Layout/LayOut';
import CarouselEffect1 from '../../Components/Carousel/CarouselEffect1';
import Category from '../../Components/Category/Category';
import Product from '../../Components/product/Product';
function Landing() {
  return (
    <LayOut>
      <CarouselEffect1 />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing