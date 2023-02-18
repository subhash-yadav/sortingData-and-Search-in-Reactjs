import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({id,title, thumbnail, description, price, category}) => {
 const navigate = useNavigate()
  const getId = (id) =>{
    navigate(`/product-detail/${id}`)
  }
  return (
    <>
      <div className="product">
        <div className="product-media">
          <img
            className="product-media__image"
            src={thumbnail}
            alt=""
            onClick={()=>getId(id)}
          />
        </div>
        <div className="product-detail">
          <h2 className="product-detail__title">{title}</h2>
          <p className="product-detail__desc">{description}</p>
          <p className="product-detail__price">Price: {price}</p>
          <p className="product-detail__category">category: {category}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
