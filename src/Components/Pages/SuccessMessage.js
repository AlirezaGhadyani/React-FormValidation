import React from 'react';
import styled from 'styled-components';

const SuccessMessageContainer = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
background: #00000048;
z-index: 10000000;
`;

const SuccessMessageInner = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #ffffff;
width: 580px;
max-width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: .8rem;
padding: 4rem;
border-radius: 1rem;

&h1{
    margin-bottom: 3rem;
}
`;

const FormBtn = styled.button`
font-size: 1.6rem;
font-weight: 800;
font-family: faFont;
border: 0;
background: #38b000;
color: #ffffff;
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

const SuccessMessage = ( { type, setSuccessStatus } ) => {
    return (
        <SuccessMessageContainer>
            <SuccessMessageInner>
                <h1>{`${type} شما با موفقیت انجام شد`}</h1>
                <FormBtn primary type="submit" onClick={() => setSuccessStatus( false )}>حله</FormBtn>
            </SuccessMessageInner>
        </SuccessMessageContainer>
    )
}

export default SuccessMessage
