import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);
  // console.log(categories)

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)

    if(categories.includes(newCategory)) return;
    /* Recibimos del valor que viene del InputValue(AddCategory.jsx), 
    que en este caso sería el newCategory, y lo agregamos a categories */
    setCategories([newCategory, ...categories]) 
  }
  return (
    <>
      {/* Título */}
      <h1>GiftExpertApp</h1>
      
      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ onAddCategory }
      />
      
      {/* Listado de Gif */}
      {
        categories.map( category => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }
        {/* Gif Item */}
    </>
  )
}
