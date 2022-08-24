import React, { useState } from "react";
//import styled from "styled-components";
import notImg from "../../Assets/img/mystery.webp";

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
    <div>
      <h1>Actualiza tus datos</h1>
      <form>
        <div>
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
      </form>
    </div>
  );
}
