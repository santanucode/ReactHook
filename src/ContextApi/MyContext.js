import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const createItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (itemId, updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? updatedItem : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <MyContext.Provider
      value={{
        items,
        createItem,
        updateItem,
        deleteItem
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
