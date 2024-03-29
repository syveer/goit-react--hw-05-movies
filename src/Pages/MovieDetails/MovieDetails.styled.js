import styled from 'styled-components';

export const WrapFilm = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
  min-width: 320px;
  padding: 20px;
  margin-top: 80px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapPic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 0 20px 0;
  @media screen and (min-width: 600px) {
    width: 400px;
  }
  .back {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100px;
    height: 20px;
    border-radius: 10px;
    background-color: #a9a9a9;
    color: #a9a9a9;
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 0;
    margin: 10px 0 20px 0;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #a9a9a9;
      color: #0e1841;
    }
  }
`;

export const Poster = styled.img`
  display: block;
  width: 300px;
  height: 450px;
  object-fit: cover;
  margin: 0;
  @media screen and (min-width: 600px) {
    width: 400px;
    height: 600px;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  margin: 100px 40px 40px 40px;
  @media screen and (min-width: 600px) {
    min-width: 420px;
  }
  @media screen and (min-width: 900px) {
    justify-content: flex-start;
    align-items: center;
    width: 440px;
  }
`;

export const TitleFilm = styled.h2`
  font-family: 'Prompt', sans-serif;
  display: block;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
`;

export const Score = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
`;

export const TitleOverview = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
`;

export const TextOverview = styled.p`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0 0 20px 0;
  color: #0e1841;
`;

export const TitleGenres = styled.h3`
  font-family: 'Prompt', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #0e1841;
`;

export const WrappGeners = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 320px;
  @media screen and (min-width: 600px) {
    min-width: 420px;
  }
  @media screen and (min-width: 900px) {
    width: 440px;
  }
`;

export const Genre = styled.li`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const WrapPlus = styled.div`
  display: flex;
  align-items: center;
  min-width: 320px;
`;

export const WrapLinkPlus = styled.nav`
  display: flex;
  align-items: flex-start;
  width: 320px;
  height: 40px;
  gap: 20px;
  margin-bottom: 20px;
  padding-top: 100px;

  .navigate {
    font-family: 'Prompt', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #0e1841;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;

    &.active {
      color: #2f4f4f;
    }
    &:hover,
    :focus {
      color: #2f4f4f;
    }
  }
`;

export const WrapCast = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const Profile = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

export const ActorName = styled.h4`
  font-family: 'Prompt', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #0e1641;
  margin: 0;
  padding: 0;
`;

export const Character = styled.h4`
  font-family: 'Prompt', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #0e1641;
  margin: 0;
  padding: 0;
`;
