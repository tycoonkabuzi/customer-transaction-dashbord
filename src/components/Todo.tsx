import { useRef, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const refInput = useRef(null);

  const saveTodo = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, refInput.current.value.trim()]);
  };

  console.log(todo);
  return (
    <div className="main-todo">
      <h1>Todo</h1>
      <label htmlFor="">New Task:</label>
      <input type="text" placeholder="Enter a task" ref={refInput} />
      <button onClick={saveTodo}>Save</button>
      <div className="main-todo__todos">
        <h2>What to do: </h2>
        <ul>
          {todo.map((oneTodo, index) => (
            <li key={index}>
              {oneTodo} <button>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
