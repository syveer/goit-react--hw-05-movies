import styled from 'styled-components';

export const WrapReviews = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
  padding: 0;

  @media screen and (min-width: 900px) {
    width: 900px;
    height: 300px;
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
      height: 50px;
    }

    &::-webkit-scrollbar-track {
      background: #f6f6f6;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: #0e1841;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #249fa3;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 480px;
    height: 600px;
  }
`;

export const ItemReviews = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Author = styled.h4`
  font-size: 20px; /* Am eliminat font-family și font-weight pentru a folosi valorile implicite ale stilului h4 */
  color: #333;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 16px; /* Am eliminat font-family și font-weight pentru a folosi valorile implicite ale stilului p */
  color: #555;
  margin: 0;
`;
