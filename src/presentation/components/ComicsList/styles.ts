import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CMC;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

export const ComicCarousel = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 16px;
    margin: 100px auto;
    align-items: center;
    position: relative;
    padding-bottom: 30px;

    overflow-x: scroll;
    overflow-y: unset;

    ::-webkit-scrollbar {
        height: 8px;
        cursor: pointer;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        border-radius: 4px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        background-color: #4f4b4b;
    }
`;
