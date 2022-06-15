import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components";
import ProtectedRoute from "./hocs/ProtectedRoute";
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
import withToast from "./hocs/withToast";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/quiz" component={Quiz} />
          <ProtectedRoute exact path="/results" component={Results} />
          <ProtectedRoute exact path="/profile/:username" component={Profile} />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <ProtectedRoute exact path="/create" component={CreateQuiz} />
          <ProtectedRoute exact path="/edit/:quizId" component={EditQuiz} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </StyledContainer>
    </>
  );
};

export default withToast(App);
