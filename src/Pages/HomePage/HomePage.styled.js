import styled from 'styled-components';

export const WrapHomePage = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
`;

export const TitleHomePage = styled.h1`
  font-family: 'Prompt', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #0e1841;
  padding-left: 20px;
  margin: 0 0 30px 0;
`;

export const ListPopularMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const PopularMovie = styled.li`
  display: flex;
  gap: 5px;
`;

export const TitlePopMovie = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #0e1841;
  cursor: pointer;
  margin: 0;
  padding: 0;
  &:hover,
  :focus,
  :active {
    color: #249fa3;
  }
`;
