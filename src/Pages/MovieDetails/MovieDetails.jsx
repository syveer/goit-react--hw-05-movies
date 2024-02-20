import React, { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../components/Api/Api';
import {
  Genre,
  Poster,
  Score,
  TextOverview,
  TitleFilm,
  TitleGenres,
  TitleOverview,
  WrapFilm,
  WrapInfo,
  WrapLinkPlus,
  WrapPic,
  WrapPlus,
  WrappGeners,
} from './MovieDetails.styled';
import { Loading } from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        setFilm(data);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!film) return;
  return (
    <WrapFilm id={film.id}>
      {isLoading && <Loading />}
      <WrapPic>
        <Link to={backHref.current} className="back">
          Back
        </Link>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt="poster"
        />
      </WrapPic>

      <WrapInfo>
        <TitleFilm>
          {film.title} {new Date(film.release_date).getFullYear()}
        </TitleFilm>
        <Score>User Score: {Math.ceil(film.vote_average * 10)}%</Score>
        <TitleOverview>Overview</TitleOverview>
        <TextOverview>{film.overview}</TextOverview>
        <TitleGenres>Genres</TitleGenres>
        <WrappGeners>
          {film.genres.map(({ id, name }) => {
            return <Genre key={id}>{name}</Genre>;
          })}
        </WrappGeners>
      </WrapInfo>

      <WrapPlus>
        <WrapLinkPlus>
          <NavLink className="navigate" to="cast">
            Cast
          </NavLink>
          <NavLink className="navigate" to="reviews">
            Reviews
          </NavLink>
        </WrapLinkPlus>

        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </WrapPlus>
    </WrapFilm>
  );
}
