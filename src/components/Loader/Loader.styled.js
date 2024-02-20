import { styled } from 'styled-components';
export const LoaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
`;

export const Loader = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 175px;
  height: 80px;
  background: #249fa3;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
