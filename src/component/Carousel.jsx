import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const ImageCarousel = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="min-h-fit relative w-[100%] text-gray-50">
      <button
        onClick={() => sliderRef?.current?.slickPrev()}
        className="text-gray-50 absolute md:top-[50%] bottom-0 left-0 z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M2.5 9.402c-2 1.155-2 4.041 0 5.196l9 5.196c1.515.875 3.317.259 4.102-1.096l1.898 1.096c2 1.155 4.5-.288 4.5-2.598V6.804c0-2.31-2.5-3.753-4.5-2.598l-1.898 1.096c-.785-1.355-2.587-1.971-4.102-1.096zM16 7.382v9.237l2.5 1.443a1 1 0 0 0 1.5-.866V6.804a1 1 0 0 0-1.5-.866z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => sliderRef?.current?.slickNext()}
        className="text-gray-50 absolute md:top-[50%] bottom-0 right-0 z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, i) => (
          <div key={i}>
            <img
              src={item.image}
              alt={item.title}
              className="sm:h-[60vh] max-h-[40vh] mx-auto max-w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
