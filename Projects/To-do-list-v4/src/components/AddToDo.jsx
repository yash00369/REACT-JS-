import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddToDo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButtonClicked}>
        <div className="row ys-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button className="btn btn-success ys-button">
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
