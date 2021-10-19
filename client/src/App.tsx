import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./hocs/ProtectedRoute";

import { Header } from "./components";
import {
  Home,
  Quiz,
  Results,
  CreateQuiz,
  SignIn,
  SignUp,
  Profile,
  EditQuiz,
  Settings,
} from "./pages";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const App = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/quiz" component={Quiz} />
          <ProtectedRoute exact path="/results" component={Results} />
          <ProtectedRoute exact path="/profile/:username" component={Profile} />
          <ProtectedRoute exact path="/settings" component={Settings} />

          <ProtectedRoute exact path="/create" component={CreateQuiz} />
          <ProtectedRoute exact path="/edit/:quizId" component={EditQuiz} />
        </Switch>
      </StyledContainer>
    </>
  );
};

export default App;
