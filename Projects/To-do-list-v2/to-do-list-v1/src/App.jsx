import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "06-04-2024" },
    { name: "Go to college", dueDate: "06-04-2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
