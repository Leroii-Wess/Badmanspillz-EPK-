import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../carouselStyles.css";

import image1 from "../images/carousel/1.jpg";
import image2 from "../images/carousel/2.jpg";
import image3 from "../images/carousel/3.jpg";
import image4 from "../images/carousel/4.jpg";
import image5 from "../images/carousel/5.jpg";
import image6 from "../images/carousel/6.jpg";
import image7 from "../images/carousel/7.jpg";

function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          currentClass: ".swiper-pagination-current",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="Badmanspillz" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="Badmanspillz" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
