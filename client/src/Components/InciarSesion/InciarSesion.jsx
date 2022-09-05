/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useEffect, useState } from "react";
/* Modules */

/* Components & Actions */
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../NavBar/NavBar";

/* Form Img & SVG */
import IMGoogle from "../../Assets/svg/Google.svg";
// import IMGFace from "../../Assets/svg/Facebook.svg";
import LoaderComponent from "../Loader/Loading";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */
import { RegisterStyleCont, RegisterStyleContJr } from "./IniciarSesion.style";
import { getUserInfo } from "../../Utils/auth.controller";

function InciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Login tradicional
  const login = async () => {
    try {
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
        const user = await getUserInfo();
        const homeURL = process.env.REACT_APP_API || "http://localhost:3000/";
        if (user.role === "musicband") {
          const userLogMusic = await axios.get(`http://localhost:3001/musicbandemail/${user.email}`);
          if (userLogMusic.data.disabled === true) {
            navigate("/reactivarcuenta");
          } else if (userLogMusic.data.banned === true) {
            return alert("Usuario baneado temporalmente");
          } else {
            window.location.replace(homeURL);
          }
        } else if (user.role === "place") {
          const userLogPlace = await axios.get(`http://localhost:3001/place-email/${user.email}`);
          if (userLogPlace.data.disabled === true) {
            navigate("/reactivarcuenta");
          } else if (userLogPlace.data.banned === true) {
            return alert("Usuario baneado temporalmente");
          } else {
            window.location.replace(homeURL);
          }
        } else {
          window.location.replace(homeURL);
        }
      }
    } catch (error) {
      toast.error("Verifica tu email o clave");
    }
  };

  function recuperoClave() {
    toast.dismiss();
    toast(
      (t) => (
        <span className="spancito">
          <b>¿Estas seguro de cambiar la contraseña?</b>
          <p>Se enviará un correo con los pasos a seguir.</p>
          <div className="buttonCont">
            <button
              className="buttonToastAcept"
              onClick={() => {
                toast.dismiss(t.id);
                axios.get(`/cambioclave/${email}`);
              }}
            >
              Sí, estoy seguro
            </button>
            <button
              className="buttonToastCancel"
              onClick={() => {
                toast.dismiss(t.id);
              }}
            >
              Cancelar
            </button>
          </div>
        </span>
      ),
      {
        duration: Infinity,
        style: {
          borderRadius: "3%",
        },
      },
    );
  }

  const BACK_URL = process.env.BACK_URL || "http://localhost:3001";

  const google = () => {
    localStorage.setItem("loggedWithGoogle", "true");
    window.open(`${BACK_URL}/auth/google`, "_self");
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
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
                    <a href="https://www.linkedin.com/in/matías-straface-369a66238/">MatiasStraface</a>
                  </div>
                </div>
                <div className="Rigth">
                  <h2>Inicia sesión con tu email</h2>
                  <div className="Inputs">
                    <input
                      name="input-email"
                      id="input_email"
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      name="input-password"
                      id="input_password"
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="recuperoClave" onClick={(e) => recuperoClave(e)}>
                      ¿Olvidaste tu contraseña?
                    </p>
                  </div>
                  <button type="submit" onClick={login}>
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </RegisterStyleContJr>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "",
                style: {
                  fontSize: "1.5rem",
                  fontFamily: "RocknRoll One",
                },
              }}
            />
          </RegisterStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
export default InciarSesion;
