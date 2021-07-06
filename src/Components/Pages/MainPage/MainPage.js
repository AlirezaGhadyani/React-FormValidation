import React from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel';

//styled components
const MainContainer = styled.section`
width: 1280px;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const MainPage = () => {
    return (
        <MainContainer>
            <MainCarousel />
        </MainContainer>
    )
}

export default MainPage
