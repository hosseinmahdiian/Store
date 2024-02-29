import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/productsProvider";

import { BiCategory } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import style from "./Detailspage.module.css";

const Detailspage = () => {
  const { id } = useParams();
  const details = useProductsDetails(+id);

  const { description, category, image, price, title } = details;
  return (
    <>
      <h2>Details page </h2>
      <div className={style.container}>
        <div className={style.divImg}>
          <img className={style.img} src={image} alt={title} />
        </div>
        <div className={style.seccontainer}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.dscription}>{description}</p>
          <div className={style.container}>
            <div>
              <span className={style.category}>
                <BiCategory />
                <p>{category}</p>
              </span>
              <br />
              <span className={style.price}>
                <IoPricetagOutline />
                <p>{price} $</p>
              </span>
            </div>
            <Link to="/products">
              <IoIosArrowBack />
              <span>Back to stor</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailspage;
