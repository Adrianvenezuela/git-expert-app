export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=aKsCpvQ3BGahHkYlBg0Hio2kPXNBdmu7&q=${category}&limit=10`;

  const resp = await fetch(url);
  const informacion = await resp.json();
  const { data } = informacion;

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
