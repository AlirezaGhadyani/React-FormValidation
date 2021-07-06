import React from 'react';
import styled from 'styled-components';
import SignPagesHeader from '../SignPagesHeader';
import { Formik, Form } from 'formik';

const SignUpContainer = styled.section`
width: 1280px;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const SignUpPage = () => {
    return (
        <SignUpContainer>
            <SignPagesHeader PageType="ثبت نام" />
        </SignUpContainer>
    )
}

export default SignUpPage
