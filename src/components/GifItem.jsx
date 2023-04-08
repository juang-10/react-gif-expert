import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <div className ='card'>
      {/* En el src se muestra la imagen, y en el alt se muestra el texto alternativo a mostrar */}
      <img src= {url} alt= {title}  />
      <p>{title}</p>
    </div>
  )
}
