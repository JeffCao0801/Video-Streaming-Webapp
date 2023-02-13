import React from 'react';
import Banner from '../Components/Home/Banner';
import PopularMovies from '../Components/Home/PopularMovies';

import Layout from '../Layout/Layout';

function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
      </div>
    </Layout>
  );
}

export default HomeScreen;
