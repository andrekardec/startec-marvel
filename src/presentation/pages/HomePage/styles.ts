import styled from "styled-components";

// MB = MENU BAR
// TB = TOP BAR
// WL = WELCOME AREA
// CMC = COMIC AREA
// BT = BATTLE
// SERIE = SERIE
// MC = MORE COMICS
// FT = FOOTER

export const Grid = styled.div`
    display: grid;

    grid-template-areas:
        'TB'
        'WL'
        'CMC'
        'BT'
        'SR'
        'MC'
        'FT';
    width: 100%;
`;
