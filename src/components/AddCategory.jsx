import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  // console.log(setCategories)
  const [inputValue, setInputValue] = useState('')
  // Tomar el valor escrito en el input
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  // Enviar el formulario
  const onSubmit = (event) => {
    event.preventDefault();
    // Si el input value tiene 1 o menos de un caracter, salimos de la funcióm
    if(inputValue.trim().length <= 1) return;
    
    // Recibe un callback en setCategories donde le pasamos el valor del inputValue a las categorías
      // onNewCategory((categories) => [inputValue, ...categories]);
    
    // Con la función onNewCategory, simplemente pasamos el valor del inputValue
    onNewCategory(inputValue.trim().toLowerCase());
    // Limpiamos el setInputValue después de que hemos escrito un valor
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}
