import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { LuLoader } from "react-icons/lu";
import style from "./BasketSidbar.module.css";

const BasketSidbar = ({ data, clickHandler }) => {

    if (!data.itemsCounter) {
        return (
            <p>
                Empty
            </p>
        )
    }

  return (
    <>
      <div className={style.container}>
        <div>
          <RiMoneyDollarCircleLine />
          <p>Total:</p>
          <span>{data.total} $</span>
        </div>
        <div>
          <ImAttachment />
          <p>Quantity:</p>
          <span>{data.itemsCounter}</span>
        </div>
        <div>
          <LuLoader />
          <p>Status:</p>
          <span>Pendein...</span>
        </div>

        <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
      </div>
    </>
  );
};

export default BasketSidbar;
