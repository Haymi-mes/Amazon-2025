import { useEffect, useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect1 from "./Components/Carousel/CarouselEffect1";
import Category from "./Components/Category/Category";
import Product from "./Components/product/Product";
import Routeing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { dialogTitleClasses } from "@mui/material";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      {/* <Header />  */}
      <Routeing />
    </>
  );
}

export default App;
