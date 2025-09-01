import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    "https://i.ibb.co/BV9zSDSJ/imgi-156-236087-bike-service.jpg",
    "https://i.ibb.co/r2Drq23t/imgi-222-In-person-slim-C.jpg",
    "https://i.ibb.co/99k8Gh4n/imgi-226-bike-repair-store.png",
    "https://i.ibb.co.com/NB6dXj6/imgi-2-bike-service-in-faridabad.jpg",
    "https://i.ibb.co.com/x8s69p2P/imgi-45-bike-repair.jpg",
    "https://i.ibb.co.com/dwbdFkHg/imgi-47-20240415115642.jpg",
    "https://i.ibb.co.com/Jj6GDzsh/imgi-52-mechanic-using-a-hex-key-or-allen-wrench-to-remove-motorcycle-rear-hydraulic-brake-pump-work.jpg",
    "https://i.ibb.co.com/hJKZWwgx/imgi-53-1742887966008-mobile-motorcycle-mechanic.jpg",
    "https://i.ibb.co.com/zT8nDMNH/imgi-55-Motorbike-Inspection-Repair-Course-scaled.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div id="home" className="w-full mt-10 relative px-4 md:px-0">
      {/* Heading */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4 drop-shadow-md">
          Total <span className="text-red-600">Tech Care</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed drop-shadow-sm">
          At <span className="font-semibold">Total Tech Care</span>, we provide{" "}
          <span className="font-semibold">affordable, reliable, and professional solutions</span> 
          for all your bike service needs. From routine maintenance to advanced repairs, 
          our expert team ensures top-quality care for every model and make.
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel w-full rounded-2xl overflow-hidden shadow-lg relative">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}

        {/* Prev & Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-black/30 hover:bg-black/50 text-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-black/30 hover:bg-black/50 text-white"
        >
          ❯
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex w-full justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`btn btn-xs ${
              index === current ? "btn-primary" : "btn-ghost"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
