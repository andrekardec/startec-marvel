import styled from 'styled-components';
import { Background } from ".";

export const Container = styled.div`
    grid-area: SR;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BannerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    width: 60%;
    height: 343px;

    > h2 {
        padding-bottom: 18px;
        color: ${props => props.theme.colors.primary};
    }

    > h1 {
        padding-bottom: 18px;
        color: ${props => props.theme.colors.white};
    }
    > p {
        color: ${props => props.theme.colors.white};
    }
`;

export const ImageArea = styled.div<Background>`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 343px;
    background: url(${bg => bg.image}) no-repeat top center;
    background-size: cover;
    box-shadow: inset 0 0 0 200px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
    padding: 12px 26px;
    cursor: pointer;
    border-radius: 14px 0 14px 0;
    font-weight: 600;

    font-size: 14px;
    color: var(--white);
    background-color: ${props => props.theme.colors.primary};
`;
