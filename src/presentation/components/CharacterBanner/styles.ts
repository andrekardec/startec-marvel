import styled from 'styled-components';

import Background from '@presentation/assets/ch_bg.jpg';

export const Container = styled.div`
    grid-area: BN;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${Background}) no-repeat top center;;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);

    height: 400px;
    width: 100%;

`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    font-size: 28px;
    color: ${(props) =>
    props.theme.colors.offwhite};
`;
