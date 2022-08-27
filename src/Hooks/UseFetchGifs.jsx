import { useState, useEffect } from 'react';
import { getGifs } from '../Services/GetGif';
export const UseFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLodaing, setIsLodaing] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category, 10);
    setImages(newImages);
    setIsLodaing(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLodaing,
  };
};
