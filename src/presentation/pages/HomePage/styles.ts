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

    grid-template-rows: auto auto auto auto auto 350px auto;

    grid-template-areas:
        'TB'
        'WL'
        'CMC'
        'BT'
        'SR'
        'CG'
        'FT';
    width: 100%;
`;
