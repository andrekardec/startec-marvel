import styled from 'styled-components';

// MB = MENU BAR
// TB = TOP BAR
// WL = WELCOME AREA
// CMC = COMIC AREA
// BT = BATTLE
// SERIE = SERIE
// CG = COMIC GALLERY
// FT = FOOTER

export const Grid = styled.div`
    display: grid;
    flex-wrap: nowrap;
    flex-shrink: 0;
    width: 100%;

    grid-template-rows: 55px 650px 350px 110px;


    grid-template-areas:
        'TB'
        'CMA'
        'SR'
        'FT';
    width: 100%;
`;
