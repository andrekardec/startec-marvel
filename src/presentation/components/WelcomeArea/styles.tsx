import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-left: 28px;
    z-index: -3;
    margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: initial;

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
        display: block;
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
        margin-bottom: -1px;
    }

    &::after {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 1.875rem solid transparent;
        border-right: 1.875rem solid transparent;
        border-top: 1.875rem solid
            ${props =>
                props.theme.title === 'dark'
                    ? props.theme.colors.primary
                    : props.theme.colors.textColor};
        border-bottom: 1.875rem solid transparent;
        transform: rotate(-12deg);
        right: 62px;
        bottom: -51px;
    }
`;

export const ThanksBox = styled.div`
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
        transform: rotate(90deg);
        margin-top: 0.25em;
    }
`;
