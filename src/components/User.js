import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count of Component: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name: Abhilash reddy</h2>
      <h3>Location: Texas</h3>
      <h4>This is the food delivery front end design app</h4>
    </div>
  );
};

export default User;
