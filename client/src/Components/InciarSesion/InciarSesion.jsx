/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
/* Modules */

/* Components & Actions */
import NavBar from "../NavBar/NavBar";

/* Form Img & SVG */
import IMGoogle from "../../Assets/svg/Google.svg";
// import IMGFace from "../../Assets/svg/Facebook.svg";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */
import { RegisterStyleCont, RegisterStyleContJr } from "./IniciarSesion.style";

function InciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Login tradicional
  const login = async () => {
    const response = await axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: "/login",
    });
    if (response) {
      const { token } = response.data;
      localStorage.setItem("user-token", token);
      const header = new Headers();
      header.append("authorization", token);

      const homeURL = process.env.REACT_APP_API || "http://localhost:3000/";
      window.location.replace(homeURL);
    }
  };

  const BACK_URL = process.env.BACK_URL || "http://localhost:3001";

  const google = () => {
    localStorage.setItem("loggedWithGoogle", "true");
    window.open(`${BACK_URL}/auth/google`, "_self");
  };

  return (
    <RegisterStyleCont>
      <NavBar LogIn Home FondoImg />
      <RegisterStyleContJr>
        <div className="UpSection">
          <h1>¡Hola de Nuevo!</h1>
          <p>
            ¿No tienes una cuenta? <a href="./registro">Registrate aquí</a>{" "}
          </p>
        </div>
        <div className="DownSection">
          <div className="Left">
            <h2>Iniciar sesión con una red social</h2>
            <div className="Butons">
              <button type="button" onClick={google}>
                <img src={IMGoogle} alt="" />
                <p>Ingresar con Google</p>
              </button>
              {/* <button type="button">
                <img src={IMGFace} alt="" />
                <p>Ingresar con FAcebook</p>
              </button> */}
            </div>
          </div>
          <div className="Rigth">
            <h2>Inicia sesión con tu email</h2>
            <div className="Inputs">
              <input
                name="input-email"
                id="input_email"
                type="email"
                placeholder="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="input-password"
                id="input_password"
                type="password"
                placeholder="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>¿Olvidaste tu contraseña?</p>
            </div>
            <button type="submit" onClick={login}>
              Iniciar Sesión
            </button>
          </div>
        </div>
      </RegisterStyleContJr>
    </RegisterStyleCont>
  );
}
export default InciarSesion;
