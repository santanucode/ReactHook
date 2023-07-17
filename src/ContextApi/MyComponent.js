import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const { items, createItem, updateItem, deleteItem } = useContext(MyContext);
  const [todo, setTodo] = useState("");

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  };
  const handleCreate = () => {
    const newItem = { id: Math.random(), name: todo };
    createItem(newItem);
  };

  const handleUpdate = ({ id, name }) => {
    const updatedItem = { id: id, name: todo };
    updateItem(id, updatedItem);
  };

  const handleDelete = (id) => {
    deleteItem(id);
  };

  return (
    <div>
      <label>
        Todo:
        <input type="text" onChange={handleChangeTodo} value={todo} />
      </label>
      <br />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleDelete}>Delete Item</button>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>
            {item.name}
            <button onClick={() => handleUpdate(item)}>Update Item</button>
            <button onClick={() => handleDelete(item.id)}>Delete Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
