import React, { useState, useEffect } from 'react';
import { PaintingDetailsWidget } from '~widgets/site/paintingDetails/ui/paintingDetails';
import { useLocation } from 'react-router-dom';
import { Painting } from '~entities/Painting/model';
import { Thumbnail } from '../sider/Thumbnail';
import { ThumbnailCarousel } from '../sider/thumbnailCarousel';
import getData from '~widgets/shared/Paintings/api/api';

const PaintingDescription: React.FC = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split('/').pop() || '', 10);
  const [mainImage, setMainImage] = useState<string>('');
  const [paintingData, setPaintingData] = useState<Painting | null>(null);
  const [thumbnailImages, setThumbnailImages] = useState<string[]>([]);

  const handleThumbnailClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paintings = await getData();
        const painting = paintings.find((item: Painting) => item.id === id);
        if (painting) {
          setPaintingData(painting);
          setMainImage(painting.mainImage);
          setThumbnailImages(painting.images);
        } else {
          console.error(`Painting with id ${id} not found.`);
        }
      } catch {
        throw new Error();
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:space-x-10">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        <div className="hidden md:flex flex-wrap lg:flex-col lg:space-x-10 gap-2">
          {thumbnailImages && Array.isArray(thumbnailImages) && thumbnailImages.map((image, index) => (
            <Thumbnail key={index} src={image} onClick={() => handleThumbnailClick(image)} />
          ))}
        </div>
        <div className="block md:hidden">
          {thumbnailImages && Array.isArray(thumbnailImages) && (
            <ThumbnailCarousel images={thumbnailImages} handleThumbnailClick={handleThumbnailClick} />
          )}
        </div>
        <div className="mt-4 lg:mt-0">
          <img
            className="w-full lg:w-96 object-cover"
            src={mainImage}
            alt="Описание картины"
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0 flex-1 lg:pl-14">
        {paintingData ? (
          <PaintingDetailsWidget data={paintingData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PaintingDescription;
