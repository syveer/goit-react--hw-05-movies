import styled from 'styled-components';

export const WrapMoviePage = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 320px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputSearch = styled.input`
  flex: 1;
  height: 25px;
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #708090;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: 2px solid #708090;
  padding: 0 0 0 10px;
  margin: 0;
`;

export const BtnSearch = styled.button`
  width: 70px;
  height: 30px;
  outline: 2.7px solid #708090;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #708090;
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #2F4F4F;
  }

  }
`;

export const ListMovieByName = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const MovieByName = styled.li`
  width: 100%;
  max-width: 320px;
  margin: 0;
  padding: 0;
`;

export const TitleMovie = styled.p`
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
    color: #28a8ad;
  }
`;
