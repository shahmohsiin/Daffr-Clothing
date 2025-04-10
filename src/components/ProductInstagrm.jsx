import React from "react";
import Iimg1 from '../assets/images/instagram/1.jpg'
import Iimg2 from '../assets/images/instagram/2.jpg'
import Iimg3 from '../assets/images/instagram/3.jpg'
import Iimg4 from '../assets/images/instagram/4.jpg'
import Iimg5 from '../assets/images/instagram/5.jpg'

const ProductInstagrm = () => {
  const images = [
    { src: Iimg1, alt: "Image 1" },
    { src: Iimg2, alt: "Image 2" },
    { src: Iimg3, alt: "Image 3" },
    { src: Iimg4, alt: "Image 4" },
    { src: Iimg5, alt: "Image 5" },
    { src: Iimg1, alt: "Image 6" },
  ];

  return (
    <div className=" text-white px-5">
      <h1 className="font-heading text-xl font-bold mb-5">INSTAGRAM</h1>
      <div className="grid grid-cols-3 gap-2 ">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover  transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInstagrm;
