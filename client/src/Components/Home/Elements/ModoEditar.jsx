/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../../Utils/colors";
import { getDetailMusicBandByEmail, getDetailPlaceByEmail } from "../../../Redux/actions";
import SinImg from "../../../Assets/img/mystery.webp";
import LoaderComponent from "../../Loader/Loading";

/* * * * * * * * * * * * * * * * * CSS * * * * * * * * * * * * * * * *  */

const ContainerGralStyled = styled.div`
  /* border: red solid 3px; */

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  #fraseNone {
    font-family: "New Rocker", cursive;
    margin-top: 80px;
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
  }

  .divTitulo {
    /* border: red solid 3px; */

    box-sizing: border-box;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      font-family: "RocknRoll One", sans-serif;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 150px;
      height: 38px;
      font-size: 1.8rem;
      color: white;
      background-color: black;
      font-weight: bold;
      letter-spacing: 1px;
      border-radius: 7px;
      transition: all 0.5s ease;

      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }

    & h1 {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 400;
      font-size: 5rem;
      line-height: 59px;
      color: ${Colors.Platinum};
      margin: 0px;
    }
  }

  .ContainerInput {
    width: 100%;
    border-bottom: solid 2px ${Colors.Blue_Vivid};

    span {
      font-size: 2.5rem;
      color: ${Colors.Platinum};
      font-family: "New Rocker";
      font-weight: 400;
    }
  }

  .divInputsColumna1 {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px 10px 10px 10px;
    justify-content: space-evenly;

    .sonidoPropio {
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-family: "RocknRoll One";
      font-style: normal;
      font-weight: 400;
      font-size: 2.5rem;
      text-align: justify;
      color: ${Colors.Platinum};
    }
  }

  .div2Columnas {
    display: flex;
    flex-direction: row;
  }

  .divButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .divsColumna2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 10px 10px 10px 10px;
    justify-content: space-evenly;

    h1 {
      font-family: "RocknRoll One";
      font-style: normal;
      font-weight: 400;
      font-size: 3rem;
      margin: 0px;
      margin-bottom: 5px;
      text-align: justify;
      color: ${Colors.Platinum};
    }
  }

  .textarea {
    resize: none;
    opacity: 75%;
    width: 30vw;
    line-height: 28px;
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
    color: ${Colors.Platinum};
    opacity: 50%;
  }

  .textarea:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .input {
    width: 60%;
    line-height: 28px;
    border: 2px solid transparent;
    padding: 0.2rem 0;
    outline: none;
    background-color: transparent;
    color: ${Colors.Platinum};
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin: 5px 0px 5px 10px;
    font-size: 2rem;
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
    opacity: 50%;
    font-size: 1.5rem;
  }

  .input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .BTNs {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    width: 250px;
    line-height: 49px;
    background-color: ${Colors.Blue_life};
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    color: ${Colors.Platinum};
  }
  .BTNs:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: justify;
    color: #9d4747;
    margin: 0px 2px 0px 2px;
  }

  .ImgACargar {
    margin-top: 20px;
    img {
      border: solid 3px ${Colors.Blue_Vivid};
      border-radius: 15px;
      object-fit: cover;
    }
    font-family: "New Rocker";
    font-size: 4rem;
    color: ${Colors.Platinum};
  }

  #btn-foto {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    width: 150px;
    padding: 5px 0px;
    background-color: ${Colors.Blue_life};
    border-radius: 10px;
    border: none;
    margin-top: 0px;
    cursor: pointer;
    color: ${Colors.Platinum};
    :hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }

  .SwitchCont {
    /* border: solid 3px yellow; */

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: fit-content;
    align-self: center;
    /* border: solid white 3px; */
    border-radius: 20px;
    padding: 0px 50px;
    background-color: #394b6e;

    p {
      color: white;
      font-size: 3rem;
    }

    label {
      display: inline-block;
      width: 65px;
      height: 33px;
      background-color: ${Colors.Oxford_Blue};
      border-radius: 100px;
      position: relative;
      transition: 0.2s;
      margin: 0px 20px 0px 20px;
      cursor: pointer;
      ::after {
        content: "";
        display: block;
        width: 25px;
        height: 25px;
        background-color: ${Colors.Blue_Vivid};
        border-radius: 100px;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: 0.2s;
      }
    }

    #switchInter:checked + label::after {
      left: 36px;
    }

    #switchInter:checked + label {
      background-color: ${Colors.Platinum};
    }

    #switchInter {
      display: none;
    }
  }
`;

/* * * * * * * * * * * * * * * * * Funcion valida inputs * * * * * * * * * * * * * * * *  */

function validate(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "Ingresa el nombre";
  } else if (!/^[\s\S]{1,25}$/.test(input.name)) {
    errors.name = "El nombre solo puede contener entre 1 y 25 caracteres";
  }
  if (!input.personInCharge) {
    errors.personInCharge = "Ingresa el nombre de la persona a cargo";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(input.personInCharge)) {
    errors.personInCharge = "El nombre de la persona a cargo solo puede contener letras y espacios. Y debe contener mas de 3 caracteres";
  } else if (!/^[\s\S]{3,25}$/.test(input.personInCharge)) {
    errors.personInCharge = "El nombre de la persona a cargo solo puede contener entre 3 y 25 caracteres";
  }

  if (!input.phoneNumber) {
    errors.phoneNumber = "Ingresa un numero de telefono";
  } else if (!/^[0-9]+$/.test(input.phoneNumber)) {
    errors.phoneNumber = "El telefono solo puede contener numeros";
  }

  if (
    input.instagram &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(input.instagram)
  ) {
    errors.instagram = "Ingresa una URL válida. 'example: http://example.com'";
  }

  if (input.spotify && !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(input.spotify)) {
    errors.spotify = "Ingresa una URL válida. 'example: http://example.com'";
  }

  if (input.youtube && !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(input.youtube)) {
    errors.youtube = "Ingresa una URL válida. 'example: http://example.com'";
  }

  if (!input.description) {
    errors.description = "Ingresa la descripción de tu local";
  } else if (input.description && !/^[a-zA-Z0-9 .!,Ññ?¿¡]+$/.test(input.description)) {
    errors.description = "La descripción puede contener letras, números y espacios";
  } else if (!/^[\s\S]{3,250}$/.test(input.description)) {
    errors.description = "La descripción puede tener entre 3 y 250 caracteres";
  }

  if (!input.city) {
    errors.city = "Ingresa el nombre de tu ciudad";
  } else if (!/^[a-zA-Z0-9 Ññ ]+$/.test(input.city)) {
    errors.city = "El nombre solo puede contener letras, numeros y espacios";
  } else if (!/^[\s\S]{3,25}$/.test(input.city)) {
    errors.city = "El nombre solo puede contener entre 3 y 25 caracteres";
  }

  if (!input.adress) {
    errors.adress = "Ingresa la dirección de tu lugar";
  } else if (!/^[a-zA-Z0-9 Ññ,.]+$/.test(input.adress)) {
    errors.adress = "La dirección solo puede contener letras, numeros y espacios";
  } else if (!/^[\s\S]{3,25}$/.test(input.adress)) {
    errors.adress = "La dirección solo puede contener entre 3 y 25 caracteres";
  }

  if (!input.capacity) {
    errors.capacity = "Ingresa la capacidad de tu lugar";
  } else if (!/^[0-9]+$/.test(input.capacity)) {
    errors.capacity = "La capacidad solo puede contener numeros";
  } else if (input.capacity > 600000000) {
    errors.capacity = "La capacidad solo puede hasta 600000000";
  }

  return errors;
}

/* * * * * * * * * * * * * * * * * Componente * * * * * * * * * * * * * * * *  */

function ModoEditar() {
  /* * * * * * * * * * * * * * * * * Hooks * * * * * * * * * * * * * * * *  */
  const dispatch = useDispatch();
  const place = useSelector((state) => state.detail_place);
  const musicBand = useSelector((state) => state.detail_music_band);
  const [loading, setLoading] = useState(false);

  const clickTipe = useSelector((state) => state.admin_click);

  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: clickTipe === "local" ? (place && place.name ? place.name : "") : musicBand && musicBand.name ? musicBand.name : "",
    personInCharge:
      clickTipe === "local"
        ? place && place.personInCharge
          ? place.personInCharge
          : ""
        : musicBand && musicBand.personInCharge
        ? musicBand.personInCharge
        : "",
    city: place && place.city ? place.city : "",
    hasSound: place && place.hasSound ? place.hasSound : false,
    adress: place && place.adress ? place.adress : "",
    phoneNumber:
      clickTipe === "local" ? (place && place.phoneNumber ? place.phoneNumber : "") : musicBand && musicBand.phoneNumber ? musicBand.phoneNumber : "",
    profilePicture:
      clickTipe === "local"
        ? place && place.profilePicture
          ? place.profilePicture
          : image
        : musicBand && musicBand.profilePicture
        ? musicBand.profilePicture
        : image,
    description:
      clickTipe === "local" ? (place && place.description ? place.description : "") : musicBand && musicBand.description ? musicBand.description : "",
    capacity: place && place.capacity ? place.capacity : "",
    instagram:
      clickTipe === "local"
        ? place && place.socialMedia
          ? place.socialMedia.instagram
          : ""
        : musicBand && musicBand.socialMedia
        ? musicBand.socialMedia.instagram
        : "",
    spotify: musicBand && musicBand.socialMedia ? musicBand.socialMedia.spotify : "",
    youtube: musicBand && musicBand.socialMedia ? musicBand.socialMedia.youtube : "",
  });

  useEffect(() => {
    setLoading(true);
    setInput({
      name: clickTipe === "local" ? (place && place.name ? place.name : "") : musicBand && musicBand.name ? musicBand.name : "",
      personInCharge:
        clickTipe === "local"
          ? place && place.personInCharge
            ? place.personInCharge
            : ""
          : musicBand && musicBand.personInCharge
          ? musicBand.personInCharge
          : "",
      city: place && place.city ? place.city : "",
      hasSound: place && place.hasSound ? place.hasSound : false,
      adress: place && place.adress ? place.adress : "",
      phoneNumber:
        clickTipe === "local"
          ? place && place.phoneNumber
            ? place.phoneNumber
            : ""
          : musicBand && musicBand.phoneNumber
          ? musicBand.phoneNumber
          : "",
      profilePicture:
        clickTipe === "local"
          ? place && place.profilePicture
            ? place.profilePicture
            : image
          : musicBand && musicBand.profilePicture
          ? musicBand.profilePicture
          : image,
      description:
        clickTipe === "local"
          ? place && place.description
            ? place.description
            : ""
          : musicBand && musicBand.description
          ? musicBand.description
          : "",
      capacity: place && place.capacity ? place.capacity : "",
      instagram:
        clickTipe === "local"
          ? place && place.socialMedia
            ? place.socialMedia.instagram
            : ""
          : musicBand && musicBand.socialMedia
          ? musicBand.socialMedia.instagram
          : "",
      spotify: musicBand && musicBand.socialMedia ? musicBand.socialMedia.spotify : "",
      youtube: musicBand && musicBand.socialMedia ? musicBand.socialMedia.youtube : "",
    });
    setErrors({});
  }, [place, musicBand]);

  /* * * * * * * * * * * * * * * * * Handle´s * * * * * * * * * * * * * * * *  */
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
    if (clickTipe === "local") {
      if (
        !errors.name &&
        input.name &&
        !errors.personInCharge &&
        input.personInCharge &&
        !errors.city &&
        input.city &&
        !errors.capacity &&
        input.capacity &&
        !errors.adress &&
        input.adress &&
        !errors.phoneNumber &&
        input.phoneNumber &&
        !errors.instagram &&
        !errors.description
      ) {
        await axios.put("/place", {
          email: place.email,
          data: {
            name: input.name,
            personInCharge: input.personInCharge,
            city: input.city,
            hasSound: input.hasSound,
            capacity: input.capacity,
            adress: input.adress,
            phoneNumber: input.phoneNumber,
            profilePicture: input.profilePicture,
            description: input.description,
            socialMedia: {
              instagram: input.instagram,
            },
          },
        });
        alert("Datos actualizados con exito");

        setInput({
          name: "",
          personInCharge: "",
          city: "",
          hasSound: false,
          adress: "",
          phoneNumber: "",
          profilePicture: "",
          description: "",
          capacity: "",
          instagram: "",
          spotify: "",
          youtube: "",
        });
        dispatch(getDetailPlaceByEmail(place.email));
      } else {
        alert("Por favor complete todos los campos correctamente");
      }
    }

    if (clickTipe === "banda") {
      if (
        !errors.name &&
        input.name &&
        !errors.personInCharge &&
        input.personInCharge &&
        !errors.phoneNumber &&
        input.phoneNumber &&
        !errors.instagram &&
        !errors.description &&
        !errors.spotify &&
        !errors.youtube
      ) {
        await axios.put("/musicband", {
          email: musicBand.email,
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
          city: "",
          hasSound: false,
          adress: "",
          phoneNumber: "",
          profilePicture: "",
          description: "",
          capacity: "",
          instagram: "",
          spotify: "",
          youtube: "",
        });
        dispatch(getDetailMusicBandByEmail(musicBand.email));
      } else {
        alert("Por favor complete todos los campos correctamente");
      }
    }
  }

  function handleCheckBox(e) {
    if (e.target.checked) {
      //si esta checkeado se cambia el sonido a true
      setInput({
        ...input,
        hasSound: true,
      });
    }
    if (!e.target.checked) {
      //si no esta checkeado se cambia el sonido a false
      setInput({
        ...input,
        hasSound: false,
      });
    }
  }

  function handleActivateButton() {
    if (clickTipe === "local") {
      if (
        !errors.name &&
        input.name &&
        !errors.personInCharge &&
        input.personInCharge &&
        !errors.city &&
        input.city &&
        !errors.capacity &&
        input.capacity &&
        !errors.adress &&
        input.adress &&
        !errors.phoneNumber &&
        input.phoneNumber &&
        !errors.instagram &&
        !errors.description
      ) {
        return false;
      }
      return true;
    }
    if (clickTipe === "banda") {
      if (
        !errors.name &&
        input.name &&
        !errors.personInCharge &&
        input.personInCharge &&
        !errors.phoneNumber &&
        input.phoneNumber &&
        !errors.instagram &&
        !errors.description &&
        !errors.spotify &&
        !errors.youtube
      ) {
        return false;
      }
      return true;
    }
  }

  async function handleButtonBanear(e) {
    e.preventDefault();
    if (clickTipe === "local") {
      if (confirm("Está Usted Seguro?")) {
        await axios.put("/banplace", {
          email: place.email,
        });
        await axios.get(`/banned/${place.email}`);
        dispatch(getDetailPlaceByEmail(place.email));
      }
    }

    if (clickTipe === "banda") {
      if (confirm("Está Usted Seguro?")) {
        await axios.put("/banmusicband", {
          email: musicBand.email,
        });
        await axios.get(`/banned/${musicBand.email}`);
        dispatch(getDetailMusicBandByEmail(musicBand.email));
      }
    }
  }

  /* * * * * * * * * * * * * * * * * JSX * * * * * * * * * * * * * * * *  */
  return (
    <div>
      {loading ? (
        <div>
          <ContainerGralStyled>
            {clickTipe !== "default" ? (
              <div>
                <div className="divTitulo">
                  <button type="button" onClick={(e) => handleButtonBanear(e)}>
                    {clickTipe === "local" ? (place.banned === true ? "Desbanear" : "Banear") : clickTipe && clickTipe === "banda"}
                    {clickTipe === "banda" ? (musicBand.banned === true ? "Desbanear" : "Banear") : clickTipe && clickTipe === "local"}
                  </button>
                  <h1>Datos de Banda / Local</h1>
                </div>
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                  <div className="div2Columnas">
                    <div className="divInputsColumna1">
                      <div className="ContainerInput">
                        <span>{clickTipe === "local" ? "Nombre Local" : "Nombre Banda"}</span>
                        <input
                          type="text"
                          placeholder="Nombre del local"
                          className="input"
                          value={input.name}
                          name="name"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {errors.name && <p>{errors.name}</p>}
                      <div className="ContainerInput">
                        <span>Persona a cargo:</span>
                        <input
                          type="text"
                          placeholder="Persona a cargo"
                          className="input"
                          value={input.personInCharge}
                          name="personInCharge"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {errors.personInCharge && <p>{errors.personInCharge}</p>}
                      {clickTipe === "local" ? (
                        <div className="ContainerInput">
                          <span>Ciudad:</span>
                          <input
                            type="text"
                            placeholder="Ciudad"
                            className="input"
                            value={input.city}
                            name="city"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      ) : (
                        clickTipe && clickTipe === "banda"
                      )}
                      {clickTipe === "local" ? errors.city && <p>{errors.city}</p> : clickTipe && clickTipe === "banda"}
                      {clickTipe === "local" ? (
                        <div className="ContainerInput">
                          <span>Dirección:</span>
                          <input
                            type="text"
                            placeholder="Direccion"
                            className="input"
                            value={input.adress}
                            name="adress"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      ) : (
                        clickTipe && clickTipe === "banda"
                      )}

                      {clickTipe === "local" ? errors.adress && <p>{errors.adress}</p> : clickTipe && clickTipe === "banda"}
                      <div className="ContainerInput">
                        <span>Teléfono:</span>
                        <input
                          type="text"
                          placeholder="Telefono de contacto"
                          className="input"
                          value={input.phoneNumber}
                          name="phoneNumber"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                      {clickTipe === "local" ? (
                        <div className="ContainerInput">
                          <span>Capacidad del local:</span>
                          <input
                            type="text"
                            placeholder="Capacidad de personas"
                            className="input"
                            value={input.capacity}
                            name="capacity"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      ) : (
                        clickTipe && clickTipe === "banda"
                      )}

                      {clickTipe === "local" ? errors.capacity && <p>{errors.capacity}</p> : clickTipe && clickTipe === "banda"}

                      <div className="ContainerInput">
                        <span>Instagram:</span>
                        <input
                          type="text"
                          placeholder="Instagram"
                          className="input"
                          value={input.instagram}
                          name="instagram"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {errors.instagram && <p>{errors.instagram}</p>}
                      {clickTipe === "banda" ? (
                        <div className="ContainerInput">
                          <span>Spotify:</span>
                          <input
                            type="text"
                            placeholder="Spotify"
                            className="input"
                            value={input.spotify}
                            name="spotify"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      ) : (
                        clickTipe && clickTipe === "local"
                      )}
                      {clickTipe === "banda" ? errors.spotify && <p>{errors.spotify}</p> : clickTipe && clickTipe === "local"}
                      {clickTipe === "banda" ? (
                        <div className="ContainerInput">
                          <span>Youtube:</span>
                          <input
                            type="text"
                            placeholder="YouTube"
                            className="input"
                            value={input.youtube}
                            name="youtube"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      ) : (
                        clickTipe && clickTipe === "local"
                      )}
                      {clickTipe === "banda" ? errors.youtube && <p>{errors.youtube}</p> : clickTipe && clickTipe === "banda"}
                      {clickTipe === "local" ? (
                        <div>
                          <p className="sonidoPropio">Sonido propio</p>
                          <div className="SwitchCont">
                            <p>No</p>
                            <input value={input.hasSound} id="switchInter" type="checkbox" onChange={(e) => handleCheckBox(e)} />
                            <label htmlFor="switchInter" className="label" />
                            <p>Si</p>
                          </div>
                        </div>
                      ) : (
                        clickTipe && clickTipe === "banda"
                      )}
                    </div>
                    <div className="divsColumna2">
                      <h1>Foto de perfil</h1>
                      <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
                        Subir foto
                      </button>
                      <div className="ImgACargar">
                        <img
                          src={
                            clickTipe === "local"
                              ? place && place.profilePicture
                                ? input.profilePicture
                                : SinImg
                              : musicBand && musicBand.profilePicture
                              ? input.profilePicture
                              : SinImg
                          }
                          alt="ingresa una imagen"
                          width="350px"
                          height="350px"
                        />
                      </div>
                      <textarea
                        type="text"
                        placeholder="Descripcion"
                        className="textarea"
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.description && <p>{errors.description}</p>}
                    </div>
                  </div>
                  <div className="divButton">
                    <button type="submit" className="BTNs" disabled={handleActivateButton()}>
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <h1 id="fraseNone">Aquí podrá editar usuarios y banear luego de que seleccione alguno del listado que está debajo.</h1>
            )}
          </ContainerGralStyled>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default ModoEditar;
