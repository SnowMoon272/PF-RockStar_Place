import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import notImg from "../../Assets/img/mystery.webp";

const ActualizarDatosStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActualizarDatosStyleCont2 = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Green_Nigth};
  width: 70%;
  height: 70%;
  /* font-family: "New Rocker", cursive;
  font-size: 8rem;
  color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function upLoadData() {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    const widgetCloudinary = window.cloudinary.createUploadWidget(
      {
        cloudName: "dtpaxg398",
        uploadPreset: "preset_rockstar",
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          //console.log("Imagen subida con éxito", result.info);
          setImage((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
        }
      }
    );
    widgetCloudinary.open();
  }

  return (
    <ActualizarDatosStyleCont>
      <NavBar FondoImg Home />
      <ActualizarDatosStyleCont2>
        <h1>Completa/edita tus datos</h1>
        <form>
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Nombre de la banda o solista" />
            <input type="text" placeholder="Persona a cargo" />
            <input type="text" placeholder="Descripcion" />
            <input type="tel" placeholder="Telefono de contacto" />
          </div>
          <div>
            <h3>Foto de perfil</h3>
            <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
              Subir foto
            </button>
            <div>
              {image.map((img) => {
                return (
                  <img src={img.url ? img.url : notImg} alt="" key={img.public_id} />
                );
              })}
            </div>
          </div>
          <button type="submit" className="BTNActualizar">
            Actualizar
          </button>
        </form>
      </ActualizarDatosStyleCont2>
    </ActualizarDatosStyleCont>
  );
}
