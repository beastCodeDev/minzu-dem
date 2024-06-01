import { useState, useEffect } from 'react';
import { PaintingCard } from '~entities/Painting';
import { getData } from '~widgets/Paintings/api/index';
import { Painting } from '~entities/Painting/model/index';

export default function CardList() {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => {
    const allData = async () => {
      try {
        const data = await getData();
        setPaintings(data);
      } catch {
        throw new Error();
      }
    };
    allData();
  }, []);

  return (
    <>
      {paintings.map((painting: Painting) => (
        <PaintingCard
          mainImage={painting.mainImage}
          title={painting.title}
          createdYear={painting.createdYear}
          size={{
            width: painting.size.width,
            height: painting.size.height,
            d: painting.size.d,
          }}
        />
      ))}
    </>
  );
}
