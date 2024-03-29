import React, { useEffect, useState } from "react";
import { useProducts } from "../context/productsProvider";

import style from "./Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SeachBox from "../components/SeachBox";
import {
  filterProducts,
  searchProducts,
  createQueryObject,
  getInItioalQuery,
} from "../helpers/helper";
import { useParams, useSearchParams } from "react-router-dom";
import Sidbar from "../components/sidbar";

const Products = () => {
  const products = useProducts();

  const [search, setSerch] = useState("");
  const [display, setDispaly] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDispaly(products);
    setQuery(getInItioalQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSerch(query.serach || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDispaly(finalProducts);
  }, [query]);

  return (
    <>
      <h2>products</h2>

      <SeachBox
        search={search}
        setSearch={setSerch}
        setQuery={setQuery}
        query={query}
      />

      <div className={style.continer}>
        <div className={style.products}>
          {!display.length && <Loader />}
          {display.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <div style={{ position: "relative", margin: "0px 0" }}>
          <Sidbar query={query} setQuery={setQuery} />
        </div>
      </div>
    </>
  );
};

export default Products;
