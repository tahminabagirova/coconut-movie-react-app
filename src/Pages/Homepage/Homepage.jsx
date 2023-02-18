import React from "react";
import "./Homepage.scss";
import { Swiper, SwiperSlide } from "react-swipe";
import { Pagination, Navigation } from "react-swipe";

const Homepage = () => {
  return (
    <div className="header">
          test
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            className="paginationLine"
            navigation
          >
          <SwiperSlide>
           1
          </SwiperSlide>
          <SwiperSlide>
           1
          </SwiperSlide>
          <SwiperSlide>
           1
          </SwiperSlide>
          <SwiperSlide>
           1
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Homepage;