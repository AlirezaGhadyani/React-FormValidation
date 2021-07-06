import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Components/Global/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import SignInPage from './Components/Pages/SignInPage/SignInPage';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';

const Container = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Container>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/SignIn" component={SignInPage} />
                    <Route path="/SignUp" component={SignUpPage} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App
