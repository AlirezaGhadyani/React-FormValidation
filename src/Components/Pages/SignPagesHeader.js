import React from 'react';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Header = styled.header`
width: 1280px;
max-width: 95%;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: .5rem .4rem;
border-bottom: 1px solid #acacac;

& a{
    font-size: 2.4rem;
    color: #000000;
}
`;

const PageTitle = styled.h1`
font-size: 1.8rem;
font-weight: 700;
`;

const SignPagesHeader = ( { PageType } ) => {
    return (
        <Header>
            <Link to="/">
                <TiArrowBack />
            </Link>
            <PageTitle>
                {PageType}
            </PageTitle>
        </Header>
    )
}

export default SignPagesHeader
