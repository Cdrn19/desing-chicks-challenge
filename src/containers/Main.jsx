import React from "react";
import ProductList from "../containers/ProductList";
import Filters from "../containers/Filters"
import "../styles/Main.scss";


const Main = () => {
  return (
    <div className="main__container">
      <Filters />
      <ProductList />
    </div>
  );
}

export default Main;