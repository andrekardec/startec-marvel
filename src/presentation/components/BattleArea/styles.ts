import styled from 'styled-components';

import Background from "../../assets/background.svg";

export const Container = styled.div`
    grid-area: BT;
    display: flex;
    flex-direction: column;
    height: 100%;

`;

export const BattleAreaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;

`;

export const ComicAreaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const BattleTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
        font-size: 5vw;
        font-weight: 900;
        background-color: ${props =>
            props.theme.title === 'dark'
                ? props.theme.colors.primary
                : props.theme.colors.textColor};
        color: ${props =>
            props.theme.title === 'dark'
                ? props.theme.colors.textColor
                : props.theme.colors.offwhite};
        padding: 0.15em 0.5em;
    }

    > h1:nth-child(2) {
        position: absolute;
        background-color: ${props =>
            props.theme.title === 'dark'
                ? props.theme.colors.background
                : props.theme.colors.background};
        color: ${props =>
            props.theme.title === 'dark'
                ? props.theme.colors.textColor
                : props.theme.colors.textColor};
        clip-path: inset(-1% -1% 50% -1%);
    }
`;

export const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
        display: block;
        font-size: 2vw;
        font-weight: 900;
        margin-top: 1em;
        text-align: center;
    }
    > p span {
        display: block;
        margin-top: 0.25em;
    }
`;


export const ComicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const CounterBattle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    margin: 0 20px 0 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.textColor};
    font-size: 70px;
    font-weight: 900;
    letter-spacing: 10px;
    
`;

