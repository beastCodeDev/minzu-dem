import React from 'react';

interface ThumbnailProps {
  src: string;
  onClick: () => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, onClick }) => {
  return (
    <img
      className="lg:w-16 lg:h-16 md:w-20 md:h-20 md:mt-2 object-cover cursor-pointer"
      src={src}
      alt=""
      onClick={onClick}
    />
  );
};

