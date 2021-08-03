import styled from 'styled-components';

// MB = MENU BAR
// GC = CHARACTER GRID

export const Grid = styled.div`
    display: grid;
    width: 100vw;

    grid-template-areas:
        'TB TB TB'
        'BN BN BN'
        'CC CC CC'
        'CC CC CC'
        'CC CC CC'
        'FT FT FT';
`;
