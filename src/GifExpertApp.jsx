import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      
      <div>GifExpertApp</div>

      
      <AddCategory
        
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
      categories.map((category) => (
        <GifGrid
         key={category} category={category} />
      ))}
    </>
  );
};
