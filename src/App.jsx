import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect1 from "./Components/Carousel/CarouselEffect1";
import Category from "./Components/Category/Category";
import Product from "./Components/product/Product";
import Routeing from "./Router";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header />  */}
      <Routeing />

     
    </>
  );
}

export default App;
