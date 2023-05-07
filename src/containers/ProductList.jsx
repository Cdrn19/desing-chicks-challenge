import React from "react";
import "../styles/ProductList.scss";
import ProductCard from "../components/ProductCard"

const ProductList = () => {
  const productList = {
    title: "",
    price: "3,667.86",
    description: "The Christmas Cracker is a holiday item, originall...",
    image: "https://chicks-products.s3.amazonaws.com/269296b4-ab63-4a65-ae57-3674099c6011",
    icon: "https://chicks-games.s3.amazonaws.com/a47caf04-bffb-4992-860a-4ad61ab1672c"
    
  }

  return(
    <div className="productList__container">
      <div className="ProductList__items">
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
        <ProductCard product={productList} />
      </div>
    </div>
  )
}

export default ProductList;