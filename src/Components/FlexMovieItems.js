import React from 'react';
import { BsFillBadgeHdFill } from 'react-icons/bs';


function FlexMovieItems({ movie }) {
  return (
    <>
    <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.year}</span>
      </div>
    <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.time}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div className="flex items-center gap-2">
      <BsFillBadgeHdFill className="text-grey w-5 h-5" />
      </div>
    </>
  );
}

export default FlexMovieItems;
