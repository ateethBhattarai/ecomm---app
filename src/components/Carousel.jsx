import React from "react";

const slideData = [
  {
    image:
      "https://www.freewebheaders.com/wp-content/gallery/food-beverage-size-800x200/various-spices-and-herbs-website-banner_size-800x200.jpg",
  },
  {
    image:
      "https://www.freewebheaders.com/wp-content/gallery/food-beverage-size-800x200/italian-foods-website-banner-image_size-800x200.jpg",
  },
  {
    image:
      "https://www.freewebheaders.com/wp-content/gallery/food-beverage-size-800x200/green-pickled-olive-website-banner-image_size-800x200.jpg",
  },
  {
    image:
      "https://www.grannyspickles.com/wp-content/uploads/2022/02/product-banner.jpg",
  },
];

const Carousel = () => {
  return (
    <div className="mb-6">
      <div className="carousel w-full rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slideData[0].image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slideData[1].image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slideData[2].image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slideData[3].image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Carousel;
