import React, { useCallback, useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "yogee", salary: 150000 },
    { id: 2, name: "gaurav", salary: 150000 },
    { id: 3, name: "saurav", salary: 150000 },
  ]);

  const incrementSalary = useCallback((itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, salary: item.salary + 10000 } : item
      )
    );
  }, []);

  const decrementSalary = useCallback((itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, salary: item.salary - 10000 } : item
      )
    );
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>Salary: {item.salary}</p>
          <button onClick={() => incrementSalary(item.id)}>
            Increment Salary
          </button>
          <button onClick={() => decrementSalary(item.id)}>
            Decrement Salary
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
