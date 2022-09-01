import React from "react";
import styled from "styled-components";
import IMGBanda from "../../../Assets/img/ROLLING STONES.jpg";

const ContainerGralStyled = styled.div`
  border: red solid 3px;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* font-family: 'New Rocker', cursive; */
`;

function ModoNotificar() {
  return (
    <ContainerGralStyled>
      <h1>Banda / Local</h1>
      <div className="Section">
        <div className="Section">
          <h2>Nombre de la Banda/Local</h2>
          <div className="InfoPersonal">
            <p>
              <span>Persona a cargo: </span>Manuel R Serrano T
            </p>
            <p>
              <span>Telefono: </span>(+52) 55 6192 2596
            </p>
            <p>
              <span>Ciudad: </span>Buenos Aires
            </p>
            <p>
              <span>Email: </span>CastielAltair0027@outlook.com
            </p>
            <p>
              <span>Direccion: </span>Av. Siempre Viva #54
            </p>
            <p>
              <span>Capacidad: </span>110 personas
            </p>
            <p>
              <span>Sonido propio: </span> Si
            </p>
          </div>
        </div>
        <div className="DescriptionyRank">
          <p>
            <span>Descripción: </span>Manuel Serrano Nacido en 1995 es un musico, compositor,
            productor y pianista britanico de soul clasico. Serrano fue el pianista mas vendido de
            2020 en el Reino Unido y encabezo el Royal Albert Hall de Londres.
          </p>
          <p>
            <span>Rating: </span>⭐4.68
          </p>
        </div>
        <div className="IMGyBTN">
          <img src={IMGBanda} alt="Banda" />
          <button type="button">Notificar</button>
        </div>
      </div>
    </ContainerGralStyled>
  );
}

export default ModoNotificar;
