import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon Boll"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };
};
<>
  {/* titulo */}
  <div>GifExpertApp</div>

  {/* input */}
  <AddCategory
    //setCategories={ setCategories }
    onNewCategory={ (value) => onAddCategory(value) }
  />

  {/* listado de Gif */}

  <ol>
    {categories.map((category) => (
      <div key={category}>
        <h3>{category}</h3>
        <li>{category}</li>
      </div>
    ))}
  </ol>

  {/* Git Item */}
</>;
