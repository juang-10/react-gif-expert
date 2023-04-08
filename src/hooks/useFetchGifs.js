import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifts'

export const useFetchGifs = (category) => {

  // Creamos un custom hook
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  const getImages = async() => {
    const newImages = await getGifs(category);
    //? Cuando tenga la respuesta actualiza las imagenes
    setImages(newImages);
    // console.log(images)
    setIsLoading(false)
  }

  //? Lo que hace es hacer llamar a las imagenes.
  useEffect(() => {
    getImages();
  }, [])

  //? Retornamos las imágenes y la carga
  return {
    images,
    isLoading
  }
}
