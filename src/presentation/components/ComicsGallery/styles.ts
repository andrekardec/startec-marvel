import styled from "styled-components";

export const Container = styled.div`
    grid-area: MC;
    grid-gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
    position: relative;
`;

export const Box = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    grid-gap: 16px;
    margin-right: auto;
    margin-left: auto;
    height: auto;
    align-items: center;
    background-color: ${props => props.theme.colors.white};

    > a div div img {
      max-width: 170px;
      height: auto;
      overflow: unset;
      height: max-content;

      &:hover {
        transform: translateY(2px);
      }
    }
    > h5 {
      font-size: 16px;
      color: ${props => props.theme.colors.offgray};
      background-color: red;
    }
`;
