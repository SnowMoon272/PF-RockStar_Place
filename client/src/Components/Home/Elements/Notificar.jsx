/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import Colors from "../../../Utils/colors";
// import SVGCerrar from "../../../Assets/svg/Cerrar.svg";

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  box-sizing: border-box;
  background-color: ${({ Fondo }) => (Fondo ? Colors.Oxford_Blue_transparent : "transparent")};
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

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
  textareaTitle:hover {
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
      background-color: transparent;
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

function Notificar({ Fondo }) {
  return (
    <ContainerGralStyled Fondo={Fondo}>
      <div className="SectionB">
        <textarea type="text" placeholder="Titulo" className="textarea textareaTitle" name="description" />
        <button type="button">Enviar</button>
      </div>
      <div className="SectionC">
        <textarea type="text" placeholder="Notificación" className="textarea" name="description" />
      </div>
    </ContainerGralStyled>
  );
}

export default Notificar;
