import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MovieData';
import FlexMovieItems from '../FlexMovieItems';


function Banner() {
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-96 h-96"
      >
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`/images/movies/${movie.image}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-30 left-0 flex flex-col justify-center lg:gap-6 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-white hover:text-main transitions text-black px-8 py-3 rounded text-md"
                >
                  ▶ Play
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-6 py-3 rounded text-md bg-opacity-30">
                  + My List
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
