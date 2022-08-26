/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import SVGGoogle from "../../Assets/svg/Google.svg";
import { isAuthenticated } from "../../Utils/auth.controller";

//import SVGFacebook from "../../Assets/svg/Facebook.svg";

const LoginStyleCont = styled.div`
  width: 100%;
  height: 100vh;
  background: #18191a;
  position: absolute;
  box-sizing: border-box;
  padding-left: 80px;
`;

const LoginStyleCont2 = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 70%;
  height: 80%;
  top: 120px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  background: #041318;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${Colors.Green_Light};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
  }

  h2 {
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 4em;
  }

  h3 {
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 3em;
  }

  h4 {
    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 1em;
  }

  .registro {
    font-family: "RocknRoll One", sans-serif;
    width: 150px;
    height: 45px;
    background-color: ${Colors.Green_Light};
    color: ${Colors.Erie_Black};
    border-radius: 5px;
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
  top: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-family: "RocknRoll One", sans-serif;
    margin: 8px 0px;
    width: 75%;
    height: 60px;
    background-color: #394b6e;
    border-radius: 10px;
    display: flex;
    align-items: center;

    & img {
      width: 40px;
      height: 40px;
    }

    & p {
      font-size: 2rem;
      margin: 0px auto;
      color: ${Colors.Platinum};
    }
  }
`;

const LoginEmail = styled.div`
  position: absolute;
  width: 493px;
  height: 499.33px;
  left: 700px;
  top: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .inptus {
    background-color: transparent;
    border: none;
    border-bottom: 4px solid ${Colors.Blue_life};
    outline: none;
    color: ${Colors.Platinum};
    outline: none;
    padding-left: 15px;
  }

  .email {
    /* position: absolute; */
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 552.07px;

    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    //color: rgba(229, 229, 229, 0.42);

    background-color: transparent;
    border: none;
    border-bottom: 4px solid ${Colors.Blue_life};
    outline: none;
    color: ${Colors.Platinum};
    outline: none;
    padding-left: 15px;
  }

  .password {
    /* position: absolute; */
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 649.06px;

    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    //color: rgba(229, 229, 229, 0.42);

    background-color: transparent;
    border: none;
    border-bottom: 4px solid ${Colors.Blue_life};
    outline: none;
    color: ${Colors.Platinum};
    outline: none;
    padding-left: 15px;
  }

  .passwordRepeat {
    width: 357px;
    height: 44.56px;
    left: 1079px;
    top: 747.07px;

    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    display: flex;
    align-items: center;
    //color: rgba(229, 229, 229, 0.42);

    background-color: transparent;
    border: none;
    border-bottom: 4px solid ${Colors.Blue_life};
    outline: none;
    color: ${Colors.Platinum};
    outline: none;
    padding-left: 15px;
  }

  .error {
    color: red;
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
  }

  .Tyc {
    display: flex;
    flex-direction: row;
    //font-family: "RocknRoll One";
    //font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    a {
      text-decoration: none;
      color: ${Colors.Dark_Cornflower_blue};
    }
  }
`;

function Registro() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    Password: "",
    PasswordR: "",
    Email: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    const errors = {};
    if (!input.Password) {
      errors.Password = "Ingresar contraseña";
    }
    if (!input.PasswordR) {
      errors.PasswordR = "Repetir contraseña";
    }
    if (input.Password !== input.PasswordR) {
      errors.PasswordR = "Las contraseñas no coinciden";
    }
    if (!input.Email) {
      errors.Email = "Ingresar contraseña";
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

  function handleSubmit(e) {
    e.preventDefault();
    //dispatch(REGISTRO(input));
    alert("Usuario creado con exito");
    setInput({
      Password: "",
      PasswordR: "",
      Email: "",
    });
    navigate("/");
  }

  useEffect(() => {
    if (isAuthenticated()) navigate("/");
  }, []);

  return (
    <LoginStyleCont>
      <NavBar LogIn Home FondoImg />
      <div className="SwitchCont">
        <input id="switch" type="checkbox" onChange={(e) => handleChangeSort(e)} />
        <label htmlFor="switch" className="label" />
        <p className="title">Más populares</p>
      </div>
      <LoginStyleCont2>
        <h1>¡Registrate ahora!</h1>
        <h2>Registrate como local o banda</h2>
        <LoginRed>
          <h3>Registrate con una red social</h3>
          {/* <button type="button">
            <img src={SVGFacebook} alt="" />
            <p>Registrate con Facebook</p>
          </button> */}
          <button type="button">
            <img src={SVGGoogle} alt="" />
            <p>Registrate con Google</p>
          </button>
        </LoginRed>
        <LoginEmail>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="emailRegistro">
              <h3>Registrate con tu e-mail</h3>
              <input
                type="email"
                className="email"
                placeholder="Ingresa con tu e-mail"
                name="Email"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={handleChange}
                value={input.Email}
              />
              {errors.Email && <p className="error">{errors.Email}</p>}
            </div>
            <div className="PasswordRegistro">
              <input
                type="password"
                className="password"
                placeholder="Ingresa una contraseña"
                name="Password"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={handleChange}
                value={input.Password}
              />
              {errors.Password && <p className="error">{errors.Password}</p>}
            </div>
            <div className="PasswordRRegistro">
              <input
                type="password"
                className="passwordRepeat"
                placeholder="Repite la contraseña"
                name="PasswordR"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={handleChange}
                value={input.PasswordR}
              />
              {errors.PasswordR && <p className="error">{errors.PasswordR}</p>}
            </div>
            <div className="Tyc">
              <input type="checkbox" />
              <h4>
                Acpeto los <Link to="/TerminosyCondiciones"> terminos y condiciones</Link>
              </h4>
            </div>
            <button
              type="submit"
              className="registro"
              disabled={
                !input.Email ||
                !input.Password ||
                !input.PasswordR ||
                input.Password !== input.PasswordR
              }
            >
              Registrarse
            </button>
          </form>
        </LoginEmail>
      </LoginStyleCont2>
    </LoginStyleCont>
  );
}

export default Registro;
