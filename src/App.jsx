import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect1 from "./Components/Carousel/CarouselEffect1";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
     <CarouselEffect1 />
    </>
  );
}

export default App;
