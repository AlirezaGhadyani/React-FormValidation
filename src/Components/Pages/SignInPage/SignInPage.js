import React, { useState } from 'react';
import styled from 'styled-components';
import SignPagesHeader from '../SignPagesHeader';
import { Formik, Form } from 'formik';
import TextField from '../TextField';
import * as yup from 'yup';
import SuccessMessage from '../SuccessMessage';

const SignInContainer = styled.section`
width: 1280px;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const FormWrapper = styled.div`
width: 680px;
max-width: 90%;
margin-top: 6rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

& form{
    width: 100%;
}

`;

const FormBtnWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
direction: rtl;
`;

const FormBtn = styled.button`
font-size: 1.4rem;
font-weight: 800;
font-family: faFont;
border: 2px solid #0a58ed;
background: ${props => props.primary ? '#0a58ed' : 'transparent'};
color: ${props => props.primary ? '#ffffff' : '#0a58ed'};
padding: 0.4rem 2.6rem;
margin: 1.2rem 0;
border-radius: .8rem;
transition: opacity .3s linear;
cursor: pointer;

&:hover{
    opacity: .8;
    transition: opacity .3s linear;
}
`;

const SignInPage = () => {
    const [successStatus, setSuccessStatus] = useState( false );
    const validate = yup.object( {
        email: yup.string()
            .email( 'ایمیل وارد شده معتبر نیست!' )
            .required( 'لطفا ایمیل خود را وارد کنید' ),
        password: yup.string()
            .min( 8, 'رمز عبور باید 8 کاراکتر یا بیشتر باشد' )
            .required( 'لطفا رمز عبور خود را وارد کنید' ),
    } );
    return (
        <>
            <SignInContainer>
                <SignPagesHeader PageType="ورود" />
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log( values );
                        setSuccessStatus( true );
                    }}>

                    {
                        formik => (
                            <FormWrapper>
                                <Form>
                                    <TextField label="ایمیل" name="email" type="email" />
                                    <TextField label="رمز عبور" name="password" type="password" />
                                    <FormBtnWrapper>
                                        <FormBtn primary type="submit">ورود</FormBtn>
                                    </FormBtnWrapper>
                                </Form>
                            </FormWrapper>
                        )
                    }

                </Formik>
            </SignInContainer>

            {successStatus && (
                <SuccessMessage type="ورود" setSuccessStatus={setSuccessStatus} />
            )}
        </>
    )
}

export default SignInPage
