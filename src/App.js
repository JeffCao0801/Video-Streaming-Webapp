 // main componet 
import Aos from 'aos';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollOnTop from './ScrollOnTop';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import MoviesList from './Screens/Dashboard/Admin/MovieList';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import NotFound from './Screens/NotFound';
import Register from './Screens/Register';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import DrawerContext from './Context/DrawerContext';

function App() {
  Aos.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
