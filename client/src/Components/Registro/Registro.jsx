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
  border: solid 3px red;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #18191a;
  position: absolute;
  padding-left: 80px;
`;

const LoginStyleCont2 = styled.div`
  border: solid 3px yellow;
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
    border: solid 3px yellow;

    color: ${Colors.Green_Light};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
    margin: 15px;
  }

  h2 {
    border: solid 3px yellow;

    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 4em;
    margin: 10px;
  }

  .SwitchCont {
    border: solid 3px yellow;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      display: inline-block;
      width: 65px;
      height: 33px;
      background-color: ${Colors.Platinum};
      border-radius: 100px;
      position: relative;
      transition: 0.2s;
      margin: 0px 10px 0px 0px;
      cursor: pointer;
      ::after {
        content: "";
        display: block;
        width: 25px;
        height: 25px;
        background-color: ${Colors.Green_Nigth};
        border-radius: 100px;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: 0.2s;
      }
    }

    #switch:checked + label::after {
      left: 36px;
    }

    #switch:checked + label {
      background-color: ${Colors.Green_Light};
    }

    #switch {
      display: none;
    }

    .title {
      font-family: "RocknRoll One", sans-serif;
      font-size: 20px;
      color: ${Colors.Platinum};
    }
  }

  h4 {
    border: solid 3px yellow;

    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 1em;
  }

  .registro {
    border: solid 3px green;

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

  .ContRL {
    border: solid 3px blue;
    width: 100%;
    height: 58%;
    display: flex;
    justify-content: space-around;

    .LoginRed {
      border: solid 3px green;

      width: 40%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      .TitleLeft {
        border: solid 3px blueviolet;

        color: ${Colors.Green_Light};
        font-family: "RocknRoll One";
        font-size: 3em;
      }
      button {
        border: solid 3px blueviolet;

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
    }

    .LoginEmail {
      border: solid 3px red;

      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;

      .form {
        border: solid 3px yellow;
        display: flex;
        flex-direction: column;
        align-items: center;

        .TitleRigth {
          border: solid 3px blue;

          color: ${Colors.Green_Light};
          font-family: "RocknRoll One";
          font-size: 3em;
        }
      }
      .inptus {
        /* border: solid 3px purple; */

        background-color: transparent;
        border: none;
        border-bottom: 4px solid ${Colors.Blue_life};
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }

      .email {
        border: solid 3px purple;

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
        /* border: none;
    border-bottom: 4px solid ${Colors.Blue_life}; */
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }

      .password {
        border: solid 3px purple;

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
        /* border: none;
    border-bottom: 4px solid ${Colors.Blue_life}; */
        outline: none;
        color: ${Colors.Platinum};
        outline: none;
        padding-left: 15px;
      }

      .passwordRepeat {
        border: solid 3px purple;

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
        /* border: none;
    border-bottom: 4px solid ${Colors.Blue_life}; */
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

      .Tyc {
        border: solid 3px purple;

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
      <LoginStyleCont2>
        <h1>¡Registrate ahora!</h1>
        <h2>Registrate como local o banda</h2>
        <div className="SwitchCont">
          <input id="switch" type="checkbox" />
          <label htmlFor="switch" className="label" />
          <p className="title">Más populares</p>
        </div>
        <div className="ContRL">
          <div className="LoginRed">
            <h3 className=" TitleLeft">Registrate con una red social</h3>
            <button type="button">
              <img src={SVGGoogle} alt="" />
              <p>Registrate con Google</p>
            </button>
          </div>
          <div className="LoginEmail">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h3 className=" TitleRigth">Registrate con tu e-mail</h3>
              <div className="emailRegistro">
                <input
                  type="email"
                  className="email"
                  placeholder="Ingresa con tu e-mail"
                  name="Email"
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
          </div>
        </div>
      </LoginStyleCont2>
    </LoginStyleCont>
  );
}

export default Registro;
