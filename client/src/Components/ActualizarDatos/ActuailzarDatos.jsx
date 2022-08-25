import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import notImg from "../../Assets/img/mystery.webp";
import { postData } from "../../Redux/actions";

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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const [input, setInput] = useState({
    name: "",
    personInCharge: "",
    description: "",
    phoneNumber: "",
    profilePicture: image,
    instagram: "",
    spotify: "",
    youtube: "",
  });

  function handleOpenWidget() {
    const widgetCloudinary = window.cloudinary.createUploadWidget(
      {
        cloudName: "dtpaxg398",
        uploadPreset: "preset_rockstar",
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          setImage(result.info.url);
          setInput({ ...input, profilePicture: result.info.url });
        }
      },
    );
    widgetCloudinary.open();
  };

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      //lo seteo con el value
      [e.target.name]: e.target.value,
    });
    /* setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    })); */
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postData({
      email: "willsmith@gmail.com",
      data: {
        name: input.name,
        personInCharge: input.personInCharge,
        description: input.description,
        phoneNumber: input.phoneNumber,
        profilePicture: input.profilePicture,
        socialMedia: {
          instagram: input.instagram,
          spotify: input.spotify,
          youtube: input.youtube,
        },
      },
    }));
    alert("Datos actualizados con exito");
    setInput({
      name: "",
      personInCharge: "",
      description: "",
      phoneNumber: "",
      profilePicture: image,
      instagram: "",
      spotify: "",
      youtube: "",
    });
    navigate("/");
  };

  return (
    <ActualizarDatosStyleCont>
      <NavBar FondoImg Home />
      <ActualizarDatosStyleCont2>
        <h1>Completa/edita tus datos</h1>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            {/* <input type="email" placeholder="Email" className="input" value={input.email} name="email" onChange={(e) => handleChange(e)} /> */}
            <input type="text" placeholder="Nombre de la banda o solista" className="input" value={input.name} name="name" onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Persona a cargo" className="input" value={input.personInCharge} name="personInCharge" onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Descripcion" className="input" value={input.description} name="description" onChange={(e) => handleChange(e)} />
            <input type="tel" placeholder="Telefono de contacto" className="input" value={input.phoneNumber} name="phoneNumber" onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Instagram" className="input" value={input.instagram} name="instagram" onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Spotify" className="input" value={input.spotify} name="spotify" onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Youtube" className="input" value={input.youtube} name="youtube" onChange={(e) => handleChange(e)} />
          </div>
          <div>
            <h3>Foto de perfil</h3>
            <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
              Subir foto
            </button>
            <div>
              <img
                src={image === "" ? notImg : image}
                alt="img not found"
                width="250px"
                height="250px"
              />
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
