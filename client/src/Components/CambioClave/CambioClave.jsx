import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Colors from "../../Utils/colors";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";

const CambioClaveStyleCont = styled.div`
  background-image: url(${BGHome});
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  .btnActivar {
    font-family: "RocknRoll One", sans-serif;
    width: 190px;
    height: 55px;
    padding: 0px 15px;
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

const CambioClaveDetailCont = styled.div`
  box-sizing: border-box;
  background-color: rgba(20, 33, 61, 0.75);
  width: 40%;
  height: 450px;
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;

  h2 {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  h1 {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  p {
    font-family: "RocknRoll One";
    width: 50%;
    color: ${Colors.Platinum};
    font-size: 20px;
    height: fit-content;
    width: fit-content;
  }
  .email {
        /* border: solid 3px purple; */

        /* position: absolute; */
        width: 357px;
        height: 50px;

        font-family: "RocknRoll One";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: rgba(229, 229, 229, 0.42);

        background-color: transparent;
        border: none;
        border-bottom: 4px solid ${Colors.Blue_life};
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }
  .password {
        /* border: solid 3px purple; */

        /* position: absolute; */
        width: 357px;
        height: 44.56px;

        font-family: "RocknRoll One";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: rgba(229, 229, 229, 0.42);

        background-color: transparent;
        border: none;
        border-bottom: 4px solid ${Colors.Blue_life};
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }

      .passwordRepeat {
        /* border: solid 3px purple; */

        width: 357px;
        height: 44.56px;

        font-family: "RocknRoll One";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
        display: flex;
        align-items: center;
        color: rgba(229, 229, 229, 0.42);

        background-color: transparent;
        border: none;
        border-bottom: 4px solid ${Colors.Blue_life};
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }
      .error {
        border: solid 3px purple;

        color: red;
        font-family: "RocknRoll One";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 19px;
      }
`;

export default function cambioClave() {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    PasswordR: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    const errors = {};
    const noValido = / /;
    if (!input.password) {
      errors.password = "Ingresar contraseña";
    }
    if (!/^[\s\S]{8,15}$/.test(input.password)) {
      errors.password = "Al menos contener de 8 a 15 caracteres";
    }
    if (!/[A-Z]/.test(input.password)) {
      errors.password = "Debe contener una letra mayuscula";
    }
    if (noValido.test(input.password)) {
      errors.password = "No debe contener espacio";
    }
    if (!input.PasswordR) {
      errors.PasswordR = "Repetir contraseña";
    }
    if (input.password !== input.PasswordR) {
      errors.PasswordR = "Las contraseñas no coinciden";
    }
    if (!input.email) {
      errors.email = "Ingresar email";
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  }

  // eslint-disable-next-line consistent-return
  async function handleClick(e) {
    if (
      !errors.password &&
      !errors.PasswordR &&
      !errors.email &&
      input.email &&
      input.password &&
      input.PasswordR &&
      input.password === input.PasswordR
    ) {
      await axios.put("/chagepassword", {
        email: input.email,
        disabled: input.password,
      });
      toast.success("Contraseña modificada con exito");
      setInput({
        PasswordR: "",
        email: "",
        password: "",
      });
      return navigate("/iniciarsesion");
    }
    toast.error("¡Ups! Hay algún problema, revisa el email o contraseña");
  }

  return (
    <CambioClaveStyleCont>
      {/* <NavBar /> */}
      <CambioClaveDetailCont>
        <h1>Rock Star place</h1>
        <p>
          Ingrese su email y nueva contraseña
        </p>
        <div className="emailRegistro">
          <input
            type="email"
            className="email"
            placeholder="Ingresa tu e-mail"
            name="email"
            autoComplete="off"
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange}
            value={input.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="PasswordRegistro">
          <input
            type="password"
            className="password"
            placeholder="Ingresa una contraseña"
            name="password"
            autoComplete="off"
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange}
            value={input.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="PasswordRRegistro">
          <input
            type="password"
            className="passwordRepeat"
            placeholder="Repite la contraseña"
            name="PasswordR"
            autoComplete="off"
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange}
            value={input.PasswordR}
          />
          {errors.PasswordR && <p className="error">{errors.PasswordR}</p>}
        </div>
      </CambioClaveDetailCont>
      <button type="button" className="btnActivar" onClick={(e) => handleClick(e)}>
        Confirmar
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </CambioClaveStyleCont>
  );
}
