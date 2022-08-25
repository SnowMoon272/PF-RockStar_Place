import React from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";

const ButtonStyleSuscribete = styled.div`
  .btnSuscribete {
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
export default function BotonSuscribete() {
  return (
    <ButtonStyleSuscribete>
      <form action="http://localhost:3001/checkout" method="POST">
        <button className="btnSuscribete" type="submit">
          Suscribete
        </button>
      </form>
    </ButtonStyleSuscribete>
  );
}
