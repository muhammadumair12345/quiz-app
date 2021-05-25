import styled from 'styled-components';

export const Container = styled.div`
    background-color:rgb(254 128 0 / 0.6);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height: 500px;
    width: 400px;
    padding:1rem;
    border:4px solid #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px) {
        width:100vw;
     }
`;