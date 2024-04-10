import css from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClick = () => {
  //   console.log(`${foodItem} being bought`);
  // };

  return (
    <li className={`${["ys-item"]}list-group-item ${bought && "active"} `}>
      <span>{foodItem}</span>
      <button
        className={`${css.button} btn btn-info `}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
