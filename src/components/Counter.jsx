import React from "react";

import style from "./Counter.module.css";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";

const Counter = ({ dispatch, data, quantity }) => {
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <>
      <div className={style.action}>
        
        <div>
          {quantity == 1 ? (
            <button onClick={() => clickHandler("REMOVE")}>
              <MdOutlineDelete />
            </button>
          ) : (
            quantity > 1 && (
              <button onClick={() => clickHandler("DECREASE")}>-</button>
            )
          )}

          {!!quantity > 0 && <p>{quantity}</p>}

          {quantity == 0 ? (
            <button onClick={() => clickHandler("ADD")}>
              <IoBagAddOutline />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Counter;
