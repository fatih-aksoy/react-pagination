import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [items, setItems] = useState([]); //! to fetch api info
  const [visible, setVisible] = useState(3); //! button which load 3 types food

  function showMoreMeals() {
    setVisible((item) => (item += 3));
  }

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);

  return (
    <div className="App">
      <h1 className="header">
        British Meals
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" />
      </h1>
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div key={item.idMeal} className="card">
            <div className="image">
              <img src={item.strMealThumb} alt={item.idMeal} />
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
      </div>
      <button onClick={showMoreMeals}>Click for More Meals</button>
    </div>
  );
}

export default App;
