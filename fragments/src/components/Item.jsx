const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item ys-item">{JSON.stringify(foodItem)}</li>
  );
};
export default Item;
