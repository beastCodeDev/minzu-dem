import React from 'react';
import { Thumbnail } from './Thumbnail';

interface ThumbnailCarouselProps {
  images: string[];
  handleThumbnailClick: (imageSrc: string) => void;
}

export const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({ images, handleThumbnailClick }) => {
  return (
    <div className="flex lg:flex-row space-y-2 gap-10 md:justify-around hidden sm:block lg:block">
      {images.map((image, index) => (
        <Thumbnail key={index} src={image} onClick={() => handleThumbnailClick(image)} />
      ))}
    </div>
  );
};

