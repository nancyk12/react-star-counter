import { useState } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <header className="header">
       
        <img className="logo" src="https://www.thesprucecrafts.com/thmb/SwK_Y20sbljJG4TObLqnzHDv6sY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shooting-star-1--587e4d935f9b584db3e0d71e.png" alt="Logo"/>
    
        <h1 className="app-name">Count the Stars</h1>
        <div className="menu">Menu</div>
      </header>
      <div className="counter">
        <button className="subtractButton" onClick={handleRemove}>Remove 1</button>
        <span>{count}</span>
        <button className="addButton" onClick={handleAdd}>Add 1</button>
      </div>
      <div className="stars-container">
        {Array.from({ length: count }).map((_, index) => (
          <div className="star-box" key={index}>
            <span className="star-icon">&#9733;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;