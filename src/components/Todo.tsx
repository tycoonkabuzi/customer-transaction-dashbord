import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const refInput = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  const saveTodo = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, refInput.current.value.trim()]);
  };

  const deleteTodo = (toBeDeleted) => {
    const newFiltered = todo.filter((element) => element !== todo[toBeDeleted]);
    setTodo(newFiltered);
  };
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
              {oneTodo}
              <button onClick={() => deleteTodo(index)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
