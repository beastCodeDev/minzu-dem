// components/PaintingDetailsWidget.tsx
import React from 'react';
import { Painting } from '~entities/Painting/model';

interface PaintingDetailsWidgetProps {
  data: Painting | null;
}

const PaintingDetailsWidget: React.FC<PaintingDetailsWidgetProps> = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
      <div className="space-y-6">
        <p></p>
        <div>
          <h6 className="mt-8 font-bold"></h6>
          <p className="mb-3">
            <strong>Size:</strong> {data.size.width} W x {data.size.height} H x {data.size.d} D cm
          </p>
          <p><strong>Price:</strong> €</p>
          <p className="text-gray-400 mt-2 mb-10">Ships in a Box</p>
          <button className='w-full h-18 bg-transparent font-semibold hover:bg-slate-900 text-black transition duration-700 hover:text-white py-2 px-4 border border-black hover:border-transparent'>I want to buy it</button>
        </div>
      </div>
    </div>
  );
};

export default PaintingDetailsWidget;
