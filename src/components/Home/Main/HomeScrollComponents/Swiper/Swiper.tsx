import { Autoplay, Navigation, Pagination, A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import styled from "styled-components";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Who1 from "../../../../assets/images/Who1.svg";
import Who2 from "../../../../assets/images/Who2.svg";
import Who3 from "../../../../assets/images/Who3.svg";

const Image1 = styled.div`
  background-image: url(${Who1});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`;
const Image2 = styled.div`
  background-image: url(${Who2});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`;
const Image3 = styled.div`
  background-image: url(${Who3});
  width: 1440px;
  height: 856px;
  margin: 0 auto;
`;

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image1 />
      </SwiperSlide>
      <SwiperSlide>
        <Image2 />
      </SwiperSlide>
      <SwiperSlide>
        <Image3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
