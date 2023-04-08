export const getGifs = async(category) => {

  //? Vamos usar la url 
  const url = `https://api.giphy.com/v1/gifs/search?api_key=DbOFOiuA8JqpWV1uHd2TvycCUOmDHpvw&q=${category}&limit=10`
  //? creamos la respuesta a la url
  const resp =  await fetch(url)
  const {data} = await resp.json();
  // console.log({data})
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  // console.log(data)

  return gifs
}