import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('../Pages/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../Pages/MoviesPages/MoviesPages'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
