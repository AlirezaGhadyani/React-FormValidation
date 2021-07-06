import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Components/Global/GlobalStyle';
import MainPage from './Components/Pages/MainPage/MainPage';

const Container = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <MainPage />
            </Container>
        </>
    )
}

export default App
