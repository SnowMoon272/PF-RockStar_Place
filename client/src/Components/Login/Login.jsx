import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";

const LoginStyleCont = styled.div`
  width: 1920px;
  height: 1080px;
  background: #18191A;

  position: relative;
  box-sizing: border-box;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login() {
  return (
    <LoginStyleCont>
      <NavBar LogIn Buscar FiltroA FiltroB FondoImg />
      <h1>¡Registrate ahora!</h1>
      <h2>Registrate como local o banda</h2>
      <h3>Registrate con una red social</h3>
      <button type="button">Registrate con Facebook</button>
      <button type="button">Registrate con Google</button>
      <h3>Registrate con tu e-mail</h3>
      <input type="text" placeholder="Ingresa con tu e-mail" />
      <input type="text" placeholder="Ingresa una contraseña" />
      <input type="text" placeholder="Repite la contraseña" />
      <input type="checkbox" />
      <h4>Acpeto los <Link to="/TerminosyCondiciones"> terminos y condiciones</Link></h4>
      <button type="button">Registrarse</button>
    </LoginStyleCont>
  );
};

export default Login;
