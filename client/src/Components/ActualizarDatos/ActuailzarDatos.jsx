/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import notImg from "../../Assets/img/mystery.webp";
// import { postData } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import { isAuthenticated, getUserInfo } from "../../Utils/auth.controller";
import { resetDetails } from "../../Redux/actions";

const ActualizarDatosStyleCont = styled.div`
  box-sizing: border-box;
  background-image: url(${BGPerfil});
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "New Rocker", cursive;
    margin-top: 5%;
    font-size: 5rem;
    height: 25%;
    width: 100%;
    text-align: center;
    color: ${Colors.Platinum};
  }

  button {
    border: none;
    font-family: "New Rocker";
    font-weight: 400;
    font-size: 2rem;
    border-radius: 10px;
    background-color: ${Colors.Blue_life};
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.Platinum};
    text-decoration: none;
    margin-top: 20px;
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .form {
    width: 40vw;
  }
`;

const ActualizarDatosStyleCont2 = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Oxford_Blue_transparent};
  width: 80%;
  height: 80%;
  font-family: "New Rocker", cursive;
  font-size: 8rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;

    .div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .input {
      line-height: 28px;
      border: 2px solid transparent;
      border-bottom-color: ${Colors.Blue_Vivid};
      padding: 0.2rem 0;
      outline: none;
      background-color: transparent;
      color: ${Colors.Platinum};
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      margin: 5px 0px 5px 0px;
    }

    .input:focus,
    input:hover {
      outline: none;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border-color: #7a9cc6;
    }

    .input::placeholder {
      color: ${Colors.Platinum};
    }

    .input:focus::placeholder {
      opacity: 0;
      transition: opacity 0.3s;
    }

    .errors {
      font-family: "RocknRoll One";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-align: justify;
      color: #9d4747;
      margin: 0px 2px 0px 2px;
    }
  }

  .cargarImagen {
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: "New Rocker", cursive;
      font-size: 3rem;
      color: ${Colors.Platinum};
    }

    img {
      width: 250px;
      height: 250px;
    }

    button {
      border: none;
      font-family: "New Rocker";
      font-weight: 400;
      font-size: 2rem;
      border-radius: 10px;
      background-color: ${Colors.Blue_life};
      width: 45%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${Colors.Platinum};
      text-decoration: none;
      margin-top: 20px;
      transition: all 0.5s ease;

      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`;

function validate(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "Ingresa tu nombre o el nombre de la banda";
  } else if (!/^[\s\S]{3,25}$/.test(input.name)) {
    errors.name = "El nombre puede contener entre 3 y 25 caracteres";
  }
  if (!input.personInCharge) {
    errors.personInCharge = "Ingresa el nombre de la persona a cargo de la banda";
  } else if (!/^[a-zA-Z Ññ ]+$/.test(input.personInCharge)) {
    errors.personInCharge = "El nombre de la persona a cargo  puede contener letras y espacios";
  } else if (!/^[\s\S]{3,25}$/.test(input.personInCharge)) {
    errors.personInCharge =
      "El nombre de la persona a cargo puede contener entre 3 y 25 caracteres";
  }
  if (!input.phoneNumber) {
    errors.phoneNumber = "Ingresa un numero de telefono";
  } else if (!/^[0-9]+$/.test(input.phoneNumber)) {
    errors.phoneNumber = "El telefono solo puede contener numeros";
  }

  if (
    input.instagram &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      input.instagram,
    )
  ) {
    errors.instagram = "Ingresa una URL válida. 'example: http://example.com'";
  }
  if (!input.description) {
    errors.description = "Ingresa la descripción de tu banda";
  } else if (input.description && !/^[a-zA-Z0-9 .!,]+$/.test(input.description)) {
    errors.description = "La descripción puede contener letras, números y espacios";
  } else if (!/^[\s\S]{3,250}$/.test(input.description)) {
    errors.description = "Ladescripción puede tener entre 3 y 250 caracteres";
  }
  if (
    input.spotify &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      input.spotify,
    )
  ) {
    errors.spotify = "Ingresa una URL válida. 'example: http://example.com'";
  }
  if (
    input.youtube &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      input.youtube,
    )
  ) {
    errors.youtube = "Ingresa una URL válida. 'example: http://example.com'";
  }
  return errors;
}

export default function upLoadData() {
  const navigate = useNavigate();
  const [userBand, setuserBand] = useState({});

  useEffect(async () => {
    if (isAuthenticated()) {
      setuserBand(getUserInfo());
    } else {
      navigate("/musicbandprofile");
    }
  }, []);

  const [errors, setErrors] = useState({});

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
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      }),
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      input.name &&
      !errors.personInCharge &&
      input.personInCharge &&
      input.description &&
      !errors.description &&
      input.phoneNumber &&
      !errors.phoneNumber &&
      input.profilePicture &&
      !errors.instagram &&
      !errors.spotify &&
      !errors.youtube
    ) {
      await axios.put("/musicband", {
        email: userBand.email,
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
      });
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
      resetDetails({});
      navigate(`/musicbandprofile/${userBand._id}`);
    } else {
      alert("Ups! Hay algún problema, revisa la información");
    }
  }

  return (
    <ActualizarDatosStyleCont>
      <NavBar Home />
      <h1>Completa/edita tus datos</h1>
      <ActualizarDatosStyleCont2>
        <form className="form">
          <div className="inputs">
            <div className="div">
              <input
                type="text"
                placeholder="Nombre de la banda o solista"
                className="input"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className="errors">{errors.name}</p>}
            </div>
            <div className="div">
              <input
                type="text"
                placeholder="Persona a cargo"
                className="input"
                value={input.personInCharge}
                name="personInCharge"
                onChange={(e) => handleChange(e)}
              />
              {errors.personInCharge && <p className="errors">{errors.personInCharge}</p>}
            </div>
            <div className="div">
              <input
                type="text"
                placeholder="Descripcion"
                className="input"
                value={input.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
              {errors.description && <p className="errors">{errors.description}</p>}
            </div>
            <div className="div">
              <input
                type="tel"
                placeholder="Telefono de contacto"
                className="input"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
              />
              {errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
            </div>
            <div className="div">
              <input
                type="text"
                placeholder="Instagram"
                className="input"
                value={input.instagram}
                name="instagram"
                onChange={(e) => handleChange(e)}
              />
              {errors.instagram && <p className="errors">{errors.instagram}</p>}
            </div>
            <div className="div">
              <input
                type="text"
                placeholder="Spotify"
                className="input"
                value={input.spotify}
                name="spotify"
                onChange={(e) => handleChange(e)}
              />
              {errors.spotify && <p className="errors">{errors.spotify}</p>}
            </div>
            <div className="div">
              <input
                type="text"
                placeholder="Youtube"
                className="input"
                value={input.youtube}
                name="youtube"
                onChange={(e) => handleChange(e)}
              />
              {errors.youtube && <p className="errors">{errors.youtube}</p>}
            </div>
          </div>
        </form>
        <div className="cargarImagen">
          <h3>Foto de perfil</h3>
          <div>
            <img src={image === "" ? notImg : image} alt="img not found" />
          </div>
          <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
            Subir foto
          </button>
        </div>
      </ActualizarDatosStyleCont2>
      <button type="button" className="BTNActualizar" onClick={(e) => handleSubmit(e)}>
        Actualizar
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ActualizarDatosStyleCont>
  );
}
