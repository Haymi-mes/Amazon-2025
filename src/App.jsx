import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect1 from "./Components/Carousel/CarouselEffect1";
import Category from "./Components/Category/Category";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
     <CarouselEffect1 />
     <Category />
    </>
  );
}

export default App;
