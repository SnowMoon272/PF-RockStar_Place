import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";

const RegisterStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterStyleContJr = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Green_Nigth};
  width: 70%;
  height: 70%;
`;

function Registrar() {
  return (
    <RegisterStyleCont>
      <NavBar FondoImg Home />
      <RegisterStyleContJr>sfdghdfg</RegisterStyleContJr>
    </RegisterStyleCont>
  );
}

export default Registrar;