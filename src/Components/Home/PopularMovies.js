import React from 'react';
import Titles from '../Titles';
import { BsYoutube } from 'react-icons/bs';
import Movie from '../Movie';
import { Movies } from '../../Data/MovieData';

function PopularMovies() {
  return (
    <div className="my-16">
      <Titles title="My List" Icon={BsYoutube} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
