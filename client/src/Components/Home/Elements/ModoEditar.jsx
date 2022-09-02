import React from "react";
import styled from "styled-components";
import Colors from "../../../Utils/colors";

const ContainerGralStyled = styled.div``;

function ModoEditar() {
  return (
    <ContainerGralStyled>
      <div className="Titulo">
        <button type="button">Banear</button>
        <h1>Banda / Local</h1>
      </div>
      <div className="Section">
        <div className="SectionA">
          <h2>Bar Las Americas</h2>
          <div className="BandLocalInfo">
            <p>
              <span>Persona a cargo: </span>Rafael Gomez Plata
            </p>
            <p>
              <span>Telefono: </span>(+52) 55 6192 2596
            </p>
            <p>
              <span>Ciudad: </span>Buenos Aires
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
        <div className="SectionB">
          <p>
            <span>Descripción: </span>Descripcion
          </p>
          <p>
            <span>Rating: </span>4.58
          </p>
        </div>
        <div className="SectionC">
          <button type="button">Foto</button>
          <img src="" alt="" />
          <button type="button">Actualizar</button>
        </div>
      </div>
    </ContainerGralStyled>
  );
}

export default ModoEditar;
