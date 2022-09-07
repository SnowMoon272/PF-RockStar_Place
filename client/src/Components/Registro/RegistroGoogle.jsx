/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import { isAuthenticated } from "../../Utils/auth.controller";
import LoaderComponent from "../Loader/Loading";
//import SVGFacebook from "../../Assets/svg/Facebook.svg";

const LoginStyleCont = styled.div`
  /* border: solid 3px red; */
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #18191a;
  position: absolute;
`;

const LoginStyleCont2 = styled.div`
  /* border: solid 3px yellow; */
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;

  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  background: #041318;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    /* border: solid 3px yellow; */

    color: ${Colors.Green_Light};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
    margin: 15px;
  }

  h2 {
    /* border: solid 3px yellow; */

    color: ${Colors.Green_Light};
    font-family: "RocknRoll One";
    font-size: 4em;
    margin: 10px;
  }
  .registro {
    /* border: solid 3px green; */
    margin-top: 15px;
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

  .SwitchCont {
    /* border: solid 3px yellow; */

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: auto;
    /* border: solid white 3px; */
    border-radius: 20px;
    padding: 0px 50px;
    background-color: #394b6e;

    p {
      color: white;
      font-size: 3rem;
    }

    label {
      display: inline-block;
      width: 65px;
      height: 33px;
      background-color: ${Colors.Oxford_Blue};
      border-radius: 100px;
      position: relative;
      transition: 0.2s;
      margin: 0px 20px 0px 20px;
      cursor: pointer;
      ::after {
        content: "";
        display: block;
        width: 25px;
        height: 25px;
        background-color: ${Colors.Green_Light};
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
      background-color: ${Colors.Platinum};
    }

    #switch {
      display: none;
    }
  }
`;

function RegistroGoogle() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [checked, setChecked] = useState("banda");

  function handleCheck(e) {
    if (e.target.checked === true) {
      setChecked("local");
      localStorage.setItem("role", "place");
    } else {
      setChecked("banda");
      localStorage.setItem("role", "musicband");
    }
  }

  // eslint-disable-next-line consistent-return

  useEffect(() => {
    setLoading(true);
    if (isAuthenticated()) navigate("/iniciarsesion");
    return () => {
      toast.remove();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <LoginStyleCont>
            <LoginStyleCont2>
              <h1>Registro con Google</h1>
              <h2>Registrate como local o banda</h2>
              <div className="SwitchCont">
                <p>Banda</p>
                <input id="switch" type="checkbox" onChange={(e) => handleCheck(e)} />
                <label htmlFor="switch" className="label" />
                <p>Local</p>
              </div>
              <button className="registro" type="submit">
                Confirmar
              </button>
            </LoginStyleCont2>
          </LoginStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default RegistroGoogle;
