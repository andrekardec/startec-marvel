import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FT;
    display: flex;
    flex-direction: column;
    background-color: var(--gray400);
    margin-top: -3px;
    padding-top: 20px;
    padding-bottom: 20px;
`;
export const DevelopedBy = styled.div`
    display: flex;
    flex-direction: column;

    > h5 {
        font-size: 14px;
        color: ${(props) =>
    props.theme.colors.white};
        text-align: center;
        font-weight: 300;
    }

    > h4 {
        font-size: 18px;
        color: ${(props) =>
    props.theme.colors.white};
        text-align: center;
        font-weight: 200;
    }

    > p {
        font-size: 12px;
        color: ${(props) =>
    props.theme.colors.white};
        text-align: center;
        font-weight: 200;
    }
    > p a {
        font-weight: 200;
    }
`;
