import React from "react";
import Logo from "../../assets/logo.png";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="softcom" />
      </Link>
      <Container>
        <h1>Welcome to Softcom!.</h1>
      </Container>
    </div>
  );
};

const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 90vh;
    font-size: 30px;

`;

export default App;
