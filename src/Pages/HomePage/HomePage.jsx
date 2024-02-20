import React, { useEffect, useState } from 'react';
import {
  ListPopularMovies,
  PopularMovie,
  TitleHomePage,
  TitlePopMovie,
  WrapHomePage,
} from './HomePage.styled';
import { fetchMovies } from '../../components/Api/Api';
import { Link, useLocation } from 'react-router-dom';
import { Loading } from 'components/Loader/Loader';

export default function HomePage() {
  const [trendList, setTrendList] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrandingMovies();
    return () => {};
  }, []);
  const getTrandingMovies = async () => {
    try {
      setIsLoading(true);
      const data = await fetchMovies();
      setTrendList(data.results);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const showList = Array.isArray(trendList) && trendList.length;

  return (
    <WrapHomePage>
      {isLoading && <Loading />}
      <TitleHomePage>Trending today</TitleHomePage>
      <ListPopularMovies>
        {showList &&
          trendList.map(({ id, title }) => {
            return (
              <PopularMovie key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  <TitlePopMovie>{title}</TitlePopMovie>
                </Link>
              </PopularMovie>
            );
          })}
      </ListPopularMovies>
    </WrapHomePage>
  );
}
