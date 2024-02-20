import styled from 'styled-components';

export const WrapCast = styled.ul`
  gap: 20px;
  margin: 0 0 20px 0;
  padding: 0;

  @media screen and (min-width: 900px) {
    width: 900px;
    height: 600px;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  @media screen and (min-width: 1400px) {
    width: 480px;
    height: 600px;
  }
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
  font-size: 20px; /* Am eliminat font-family și font-weight pentru a folosi valorile implicite ale stilului h4 */
  color: #333;
  margin: 0;
`;

export const Character = styled.h4`
  font-size: 16px; /* Am eliminat font-family și font-weight pentru a folosi valorile implicite ale stilului h4 */
  color: #555;
  margin: 0;
`;
