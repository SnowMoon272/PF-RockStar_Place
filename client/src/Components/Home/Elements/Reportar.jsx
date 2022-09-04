/* eslint-disable indent */
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { getUserInfo } from "../../../Utils/auth.controller";
import Colors from "../../../Utils/colors";
// import SVGCerrar from "../../../Assets/svg/Cerrar.svg";

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  box-sizing: border-box;
  background-color: ${({ Fondo }) => (Fondo ? Colors.Oxford_Blue_transparent : "transparent")};

  width: 100%;
  height: ${({ Down }) => (Down ? "65%" : "100%")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ Down }) => (Down ? "11%" : "0px")};

  .TitleB {
    font-family: "New Rocker";
    position: absolute;
    font-size: 7rem;
    font-weight: 400;
    top: 10px;
    left: 36%;
    color: white;
    margin: 0px;
  }

  & .SectionB {
    /* border: #09ff00 solid 3px; */

    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 10px;
    width: 100%;

    & .textareaTitle {
      border-radius: 10px;
      color: ${Colors.Platinum};
      resize: none;
      opacity: 75%;
      height: 55px;
      width: 80%;
      border: 2px solid transparent;
      border-bottom-color: ${Colors.Blue_Vivid};
      padding: 0.2rem 0;
      outline: none;
      background-color: ${({ Fondo }) => (Fondo ? Colors.Erie_Black_Transparent : Colors.Oxford_Blue_transparent)};
    }
    color: ${Colors.Platinum};
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .textareaTitle:focus,
  .textareaTitle:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: ${Colors.Platinum};
  }

  .textareaTitle::placeholder {
    font-size: 2rem;
    padding: 5px 0px 0px 8px;
    color: ${Colors.Platinum};
    opacity: 50%;
  }

  .textareaTitle:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  & button {
    font-family: "New Rocker", cursive;
    background-color: ${Colors.Blue_life};
    width: 250px;
    font-size: 2rem;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    color: ${Colors.Platinum};
    transition: all 0.5s ease;
    padding: 6px;
    margin: 5px 20px;

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      border: none;
    }
  }

  & .SectionC {
    /* border: #09ff00 solid 3px; */

    display: flex;
    justify-content: center;

    .textarea {
      resize: none;
      opacity: 75%;
      width: 98%;
      height: 100px;
      border: 2px solid transparent;
      border-bottom-color: ${Colors.Blue_Vivid};
      padding: 0.2rem 0;
      outline: none;
      border-radius: 10px;
      background-color: ${({ FondoN }) => (FondoN ? Colors.Erie_Black_Transparent : Colors.Oxford_Blue_transparent)};
      color: ${Colors.Platinum};
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      margin: 5px 0px 5px 0px;
      font-size: 1.5rem;
    }

    .textarea:focus,
    textarea:hover {
      outline: none;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border-color: ${Colors.Platinum};
    }

    .textarea::placeholder {
      font-size: 2rem;
      padding: 5px 0px 0px 8px;
      color: ${Colors.Platinum};
      opacity: 50%;
    }

    .textarea:focus::placeholder {
      opacity: 0;
      transition: opacity 0.3s;
    }
  }
`;

function Reportar(props, { Fondo, FondoN, Down }) {
  const user = getUserInfo();

  const { info } = props;

  const [message, setMesagge] = useState("");

  const handleSubmit = async (e) => {
    const notification = {
      type: "report",
      title: `${user.email} ha reportado a (${info})`,
      message,
      before: undefined,
      from: user.email,
    };

    await axios({
      method: "post",
      url: "/admins/notification/add",
      data: {
        email: "admin",
        notification,
      },
    });
  };

  const handleChangeM = (e) => {
    e.preventDefault();
    setMesagge(e.target.value);
  };
  return (
    <ContainerGralStyled Fondo={Fondo} FondoN={FondoN} Down={Down}>
      {Down && <h1 className="TitleB">Reporte</h1>}
      <div className="SectionB">
        <textarea type="text" placeholder="Titulo" className="textarea textareaTitle" name="description" value="Reporte a administración" disabled />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
      <div className="SectionC">
        <textarea type="text" placeholder="Notificación" className="textarea" name="description" onChange={(e) => handleChangeM(e)} />
      </div>
    </ContainerGralStyled>
  );
}

export default Reportar;
