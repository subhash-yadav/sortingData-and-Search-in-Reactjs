import React, { useEffect, useState } from "react";
import { getData } from "../../Api";
import Product from "./product/Product";
import "./Products.scss";
const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const apiData = getData();
    apiData.then((response) => {
      const data = response.data.products;
      setProductData(data);
    });
  }, []);
  const [query, setQuery] = useState("");
  const key = ["title", "category", "description"];
  const search = (event) => {
    setQuery(event.target.value);
  };
  const filtaerData = productData.filter((item) =>
    key.some((key) => item[key].toLowerCase().includes(query))
  );

  const [sort, setSort] = useState("default");
  const select = (event) => {
    setSort(event.target.value);
  };
  if (sort === "lowest") {
    productData.sort((x, y) => {
      return x.price - y.price;
    });
  } else if (sort === "highest") {
    productData.sort((x, y) => {
      return y.price - x.price;
    });
  } else if (sort === "a-z") {
    productData.sort((x, y) => {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort === "z-a") {
    productData.sort((x, y) => {
      return y.title < x.title ? -1 : 1;
    });
  }
  if (!productData.length) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <div className="products">
        <h1 className="products-title">Total Product</h1>
        <div className="products-search">
        <form>
          <input
            value={query}
            onChange={search}
            className="products-search__input"
            type="text"
            name=""
            id=""
          />
            <label htmlFor="sort">Sort by :</label>
            <select name="sort" id="sort" value={sort} onChange={select}>
              <option value={sort}>
                Default
              </option>
              <option id="lowest" value="lowest">
                Price lowest - Highest
              </option>
              <option id="highest" value="highest">
                Price highest - Lowest
              </option>
              <option id="a-z" value="a-z">
                Alphabet a-z
              </option>
              <option id="z-a" value="z-a">
                Alphabet z-a
              </option>
            </select>
          </form>
        </div>
        <div className="products-component">
          {filtaerData.map((data) => {
            return <Product key={data.id} data={data} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
