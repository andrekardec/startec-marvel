import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CMC;
    grid-gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    transition: transform 300ms ease 100ms;
    
    cursor: pointer;
    &:hover {
        transform: scale(1.05) !important;
    }
    > img {
        z-index: 1;
    }

    @media (min-width:320px) { 
        > img {
            max-width: 100px;
        }
    }
    @media (min-width:480px) { 
        > img {
            max-width: 160px;
        }
    }
    @media (min-width:600px) { 
        > img {
            max-width: 200px;
        }
    }
    @media (min-width:801px) { 
        > img {
            max-width: 250px;
        }
    }
    @media (min-width:1281px) { 
        > img {
            max-width: 290px;
        }
    }
    @media (min-width:1440px) { 
        > img {
            max-width: 320px;
        }
    }
`;

export const Title = styled.div`
    font-size: 12px;
`;
