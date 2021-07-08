import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainCarousel from './MainCarousel';

//styled components
const MainContainer = styled.section`
width: 1280px;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const MainBtnWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const MainButton = styled.button`
font-size: 1.6rem;
font-weight: 800;
font-family: faFont;
border: 2px solid #0a58ed;
background: ${props => props.primary ? '#0a58ed' : 'transparent'};
padding: 0.6rem 2.6rem;
margin: 1.8rem 0.8rem;
border-radius: .8rem;
transition: opacity .3s linear;
cursor: pointer;

&:hover{
    opacity: .8;
    transition: opacity .3s linear;
}

@media (max-width:355px){
    font-size: 1.2rem;
    margin: 2rem 0.4rem;
    padding: 0.4rem 2.2rem;
}


& a{
    color: ${props => props.primary ? '#ffffff' : '#0a58ed'};
}
`;

const MainPage = () => {
    return (
        <MainContainer>
            <MainCarousel />
            <MainBtnWrapper>
                <MainButton>
                    <Link to="/SignIn">ورود</Link>
                </MainButton>
                <MainButton primary>
                    <Link to="/SignUp">ثبت نام</Link>
                </MainButton>
            </MainBtnWrapper>
        </MainContainer>
    )
}

export default MainPage
