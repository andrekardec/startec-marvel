import styled from 'styled-components';
import { Like, Dislike } from 'styled-icons/boxicons-regular';

export const Button = styled.button`
  border-color: ${(props) =>
    props.theme.colors.primary};
  border-radius: 50%;
  color: #${(props) =>
    props.theme.colors.offwhite};
  position: absolute;
  top: -50px;
  left: -35px;
  overflow: hidden;
  z-index: 2;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;

  background-color: ${(props) =>
    props.theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: large;
  padding: 15px;

  &:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0;
  height: 100%;
  background: ${(props) =>
    props.theme.colors.tertiary};
  z-index: -1;
  -webkit-transition: width 150ms ease-in-out;
  transition: width 150ms ease-in-out;
}

  &:hover {
    color: #fff;
  }

    &:hover:after {
    width: 110%;
}`;

export const Icon = styled(Like)`
  width: 60px;
  height: 60px;
  padding: 6px;
  color: ${(props) =>
    props.theme.colors.white};
`;
