/* eslint-disable implicit-arrow-linebreak */

import styled from 'styled-components';

import { Bg } from '.';

// export const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   max-height: 800px;
//   max-width: 1280px;
//   min-height: 600px;
//   min-width: 1000px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin: 0 auto;
// `;

export const Border = styled.div`
  height: 237px;
  width: 280px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;

  &:hover {
    border: 1px solid white;
  }
`;

export const Card = styled.div<Bg>`
  height: 237px;
  width: 280px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 30px 50px;

  background: url(${(bg) => bg.image}) center center no-repeat;
  background-size: 354px;

  &:hover {
    background: url(${(bg) => bg.image}) left center no-repeat;
    background-size: 600px;
    }
    > h2 {
        opacity: 1;
    }
`;

export const Title = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  margin: -90px;
  font-size: 500;
  opacity: 0;
  transition: opacity 1s;
  z-index: 5;
`;
