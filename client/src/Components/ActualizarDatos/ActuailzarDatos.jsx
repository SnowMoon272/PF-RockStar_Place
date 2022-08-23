/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prefer-const */
/* eslint-disable comma-dangle */
/* eslint-disable lines-around-directive */
/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import img from "../../Assets/img/mystery.webp";

export default function upLoadData() {
  // const botonFoto = document.querySelector("#btn-foto");
  const imagen = document.querySelector("#user-foto");

  let widgetCloudinary = cloudinary.createUploadWidget(
    {
      cloudName: "dtpaxg398",
      uploadPreset: "preset_rockstar",
    },
    (err, result) => {
      if (!err && result && result.event === "success") {
        console.log("Imagen subida con éxito", result.info);
        imagen.src = result.info.secure_url;
      }
    },
  );

  function handleClickPhoto(e) {
    widgetCloudinary.open();
  }

  return (
    <div>
      <h1>Actualiza tus datos</h1>
      <form>
        <img src={img} id="user-foto" />
        <button type="button" id="btn-foto" onClick={(e) => handleClickPhoto(e)}>
          Subir foto
        </button>
      </form>
    </div>
  );
}
