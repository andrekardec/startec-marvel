/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';
import { Background } from '.';

export const Container = styled.div<Background>`
    grid-area: CMA;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${(bg) => bg.image}) no-repeat top center;;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.94);
`;

export const ComicCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;

    > div > div > img {
        box-shadow: 0px 15px 13px -1px rgba(0,0,0,0.81);
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    height: 400px;
    color: ${(props) =>
    props.theme.colors.textGray};
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.h1`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 32px;
    color: ${(props) =>
    props.theme.colors.textGray};
`;

export const Published = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
`;

export const Creator = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
    > h2 {
        text-transform: capitalize;
    }
`;
