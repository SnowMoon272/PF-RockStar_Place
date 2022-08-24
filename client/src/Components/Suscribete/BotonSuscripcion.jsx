import React from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";

const ButtonStyleSuscribete = styled.div`
  .btnSuscribete {
    background-color: #3d2aa5b2;
    height: 200px;
    width: 400px;
    font-size: 40px;
    cursor: pointer;
  }
  .btnSuscribete:hover {
    background-color: red;
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
