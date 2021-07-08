import React from 'react';
import styled from 'styled-components';
import SignPagesHeader from '../SignPagesHeader';
import TextField from '../TextField';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const SignUpContainer = styled.section`
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

const SignUpPage = () => {
    const validate = yup.object( {
        firstName: yup.string()
            .max( 15, 'باید 15 کاراکتر یا کمتر باشد' )
            .required( 'لطفا نام خود را بنویسید' ),
        lastName: yup.string()
            .max( 20, 'باید 20 کاراکتر یا کمتر باشد' )
            .required( 'لطفا نام خانوادگی خود را بنویسید' ),
        userName: yup.string()
            .max( 15, 'باید 15 کاراکتر یا کمتر باشد' )
            .required( 'لطفا یک نام کاربری برای خود انتخاب کنید' ),
        email: yup.string()
            .email( 'ایمیل وارد شده معتبر نیست!' )
            .required( 'لطفا ایمیل خود را وارد کنید' ),
        password: yup.string()
            .min( 8, 'رمز عبور باید 8 کاراکتر یا بیشتر باشد' )
            .required( 'لطفا رمز عبور خود را وارد کنید' ),
        confirmPassword: yup.string()
            .oneOf( [yup.ref( 'password' ), null], 'رمز عبور باید مطابقت داشته باشد' )
            .required( 'لطفا رمز خود را دوباره وارد کنید' )
    } );
    return (
        <SignUpContainer>
            <SignPagesHeader PageType="ثبت نام" />
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
                validationSchema={validate}
                onSubmit={values => console.log( values )}>

                {formik => (
                    <FormWrapper>
                        <Form>
                            <TextField label="نام" name="firstName" type="text" />
                            <TextField label="نام خانوادگی" name="lastName" type="text" />
                            <TextField label="نام کاربری" name="userName" type="text" />
                            <TextField label="ایمیل" name="email" type="email" />
                            <TextField label="رمز" name="password" type="password" />
                            <TextField label="تکرار رمز" name="confirmPassword" type="password" />
                            <FormBtnWrapper>
                                <FormBtn primary type="submit">ثبت نام</FormBtn>
                            </FormBtnWrapper>
                        </Form>
                    </FormWrapper>
                )}

            </Formik>
        </SignUpContainer>
    )
}

export default SignUpPage
