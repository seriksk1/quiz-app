import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home, Quiz, Results } from "./pages";

import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  padding: 20px 0;
  margin: 0 auto;
`;

const App = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default App;
