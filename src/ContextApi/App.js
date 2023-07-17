import React from "react";
import { MyProvider } from "./MyContext";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
