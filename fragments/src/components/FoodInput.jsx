import css from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={css.FoodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
