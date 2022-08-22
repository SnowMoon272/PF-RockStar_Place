import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Utils/colors";
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

const LoginStyleCont2 = styled.div`
  position: absolute;
  width: 1279px;
  height: 897px;
  left: 357px;
  top: 92px;
  background: #041318;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    color: ${Colors.Green_Light};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
  }

  h2{
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 4em;
  }

  h3{
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 3em;
  }

  h4{
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 1em;
  }

  
  .registro {
      font-family: "RocknRoll One", sans-serif;
      width: 120px;
      height: 40px;
      background-color: ${Colors.Green_Light};
      color: ${Colors.Erie_Black};
      border-radius: 10px;
      font-size: 1.8rem;
      transition: all 0.5s ease;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
`;

const LoginRed = styled.div`
  position: absolute;
  width: 501px;
  height: 289px;
  left: 100px;
  top: 441px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .BTNFace{   
    /* position: absolute; */
    width: 493px;
    height: 65px;
    left: 449px;
    top: 567px; 
    background: #4285F4;
    border-radius: 10px;

    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }

  .BTNGoogle{   
    /* position: absolute; */
    width: 493px;
    height: 65px;
    left: 449px;
    top: 665px; 
    background: #4285F4;
    border-radius: 10px;

    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

`;

const LoginEmail = styled.div`
  position: absolute;
  width: 493px;
  height: 499.33px;
  left: 700px;
  top: 441px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .email{
    /* position: absolute; */
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 552.07px;

    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: rgba(229, 229, 229, 0.42);
  }

  .password{
    /* position: absolute; */
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 649.06px;

    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: rgba(229, 229, 229, 0.42);
  }

  .passwordRepeat{
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 747.07px;

    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: rgba(229, 229, 229, 0.42);
  }
`;

function Login() {
  return (
    <LoginStyleCont>
      <NavBar Home FondoImg />
      <LoginStyleCont2>
        <h1>¡Registrate ahora!</h1>
        <h2>Registrate como local o banda</h2>
        <LoginRed>
          <h3>Registrate con una red social</h3>
          <button type="button" className="BTNFace">Registrate con Facebook</button>
          <button type="button" className="BTNGoogle">Registrate con Google</button>
        </LoginRed>
        <LoginEmail>
          <h3>Registrate con tu e-mail</h3>
          <input type="text" className="email" placeholder="Ingresa con tu e-mail" />
          <input type="text" className="password" placeholder="Ingresa una contraseña" />
          <input type="text" className="passwordRepeat" placeholder="Repite la contraseña" />
          <input type="checkbox" />
          <h4>Acpeto los <Link to="/TerminosyCondiciones"> terminos y condiciones</Link></h4>
          <button type="button" className="registro">Registrarse</button>
        </LoginEmail>
      </LoginStyleCont2>
    </LoginStyleCont>
  );
};

export default Login;
