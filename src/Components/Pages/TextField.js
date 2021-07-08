import React from 'react';
import styled from 'styled-components';
import { useField, ErrorMessage } from 'formik';

const FieldWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
`;


const TxtFieldLabel = styled.label`
font-size: 1rem;
font-weight: 600;
margin: .6rem .3rem;
`;

const TxtField = styled.input`
width: 100%;
font-size: 1.7rem;
direction: rtl;
border: 1px solid #acacac;
padding: 0.3rem 0.4rem;
transition: filter .3s linear;
border-radius: .3rem;
background: #fefefe;

&:focus{
filter: drop-shadow(0 0 2px #0a58ed);
transition: filter .3s linear;
}
`;

const ErrorSpan = styled.span`
font-size: .9rem;
color: #e63946;
margin-top: .4rem;
font-weight: 900;
`;


const TextField = ( { label, ...props } ) => {

    const [field, meta] = useField( props );

    return (
        <FieldWrapper>
            <TxtFieldLabel htmlFor={field.name} >
                {label}
            </TxtFieldLabel>
            <TxtField {...field} {...props} className={meta.touched && meta.error ? 'invalid-inp' : null} />
            <ErrorSpan>
                <ErrorMessage name={field.name} />
            </ErrorSpan>
        </FieldWrapper>
    )
}

export default TextField
