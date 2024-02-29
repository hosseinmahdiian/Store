import { useCart } from "../context/CartProvider";
import BasketCard from "../components/BasketCard";

import style from "./CheckoutPage.module.css";
import BasketSidbar from "../components/BasketSidbar";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <>
      <h2>Checkout Page</h2>
      <div className={style.container}>
        <div>
          <BasketSidbar data={state} clickHandler={clickHandler} />
        </div>

        <div>
          {state.selectedItems.map((data) => (
            <BasketCard data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
