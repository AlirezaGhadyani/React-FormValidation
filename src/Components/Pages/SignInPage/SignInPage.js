import React from 'react';
import styled from 'styled-components';
import SignPagesHeader from '../SignPagesHeader';
import { Formik, Form } from 'formik';

const SignInContainer = styled.section`
width: 1280px;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const SignInPage = () => {
    return (
        <SignInContainer>
            <SignPagesHeader PageType="ورود" />
        </SignInContainer>
    )
}

export default SignInPage
