import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    "One puch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setcategories([...categories, "hunterXhunter"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
