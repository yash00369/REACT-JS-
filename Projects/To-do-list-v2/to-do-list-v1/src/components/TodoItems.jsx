import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={css.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
