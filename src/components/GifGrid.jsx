import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  //? Llamamos al custom hook
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      {isLoading &&
        (<h2>Carganding...</h2>)
      }
      <h3>{category}</h3>
      {/* Muestra las imágenes */}
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
