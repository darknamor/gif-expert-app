export const getGifs = async (category, limit) => {
  //const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=` + 'zCTIqXuovSU481JimG88DU4bS42aNiO8' + `&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
