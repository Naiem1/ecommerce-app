'use client';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderInfo = [
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-1.jpg',
  // },
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-2.jpg',
  // },
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-3.jpg',
  // },
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-4.jpg',
  // },
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-5.jpg',
  // },
  // {
  //   sliderImg:
  //     'https://prestashop.dostguru.com/ES01/gridshop_01/modules/wbimageslider/views/img/slider-6.jpg',
  // },
  {
    id: 1,
    sliderImg:
      'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_home_slider01.png',
    title1: 'Electronic',
    title2: 'Devices',
    text: 'Four Way to Cool Compact Electronic Devices',
  },
  {
    id: 2,
    sliderImg:
      'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_home_slider02.png',
    title1: 'Unlock New',
    title2: 'Possibilities',
    text: 'Photos, Clear and Steady, Even in Low Light',
  },
  {
    id: 3,
    sliderImg:
      'https://template66564.motopreview.com/mt-demo/66500/66564/mt-content/uploads/2018/07/mt-1522_home_slider03.png',
    title1: 'When Buying ',
    title2: 'a New Phone',
    text: 'Tips of Traveling With New Phone',
  },
];

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderInfo.map((slider, i) => (
          <SwiperSlide key={i + slider.id}>
            <Image
              src={slider.sliderImg}
              width="0"
              height="0"
              layout="responsive"
              objectFit="fit"
              className="relative"
            />

            <div
              className={`banner-wrapper ${
                slider.id === 1 ? `right-96` : `left-96`
              }`}
            >
              <p>FROM</p>
              <h1 className="banner-price">$280.00</h1>
              <h1 className="banner-title">

                {slider.title1}
                <span className="block m-0 p-0">{slider.title2}</span>
              </h1>
              <p>{slider.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
