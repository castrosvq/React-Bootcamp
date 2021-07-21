import React, { useState } from "react";

export const GifExpertApp = () => {
  // const categories = ["One puch", "Samurai X", "Dragon Ball"];
  const [categories, setcategories] = useState([
    "One puch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setcategories([...categories, "hunterXhunter"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
