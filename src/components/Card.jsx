import { BiDetail } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { productsQuantity, shortText } from "../helpers/helper";
import { useCart } from "../context/CartProvider";
import Counter from "./Counter";

const Card = ({ data }) => {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productsQuantity(state, id);

  return (
    <>
      <div className={style.card}>
        <img src={image} alt="img" />
        <h3>{shortText(title)}</h3>
        <p>{price}$</p>

        <div className={style.details}>
        <Link to={`/Products/${data.id}`}>
          <BiDetail />
        </Link>

        <Counter data={data} quantity={quantity} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default Card;
