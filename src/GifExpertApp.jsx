import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        // console.log(newCategory)
        // setCategories( cat => [...cat, 'Valorant'] );
        setCategories([newCategory, ...categories]);
    };
    
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={ onAddCategory } />
        {/* La i significa que se pasa el indice del arreglo */}
        { 
            categories.map( (category, i) => (
                <GifGrid key={ category } category={ category } />
            ))
        }
    </>
  );
};