/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import notImg from "../../Assets/img/mystery.webp";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import LogoCircular from "../../Assets/img/LogoCircular.png";
import { isAuthenticated, getUserInfo } from "../../Utils/auth.controller";
import { getDetailPlace } from "../../Redux/actions";

const ActualizarDatosStyleCont = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BGPerfil});
  flex-direction: row-reverse;
  box-sizing: border-box;

  .divLogo {
    img {
      position: absolute;
      top: 45px;
      right: 140px;
    }
  }
`;

const ActualizarDatosStyleCont2 = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Oxford_Blue_transparent};
  padding: 50px;
  width: 80%;
  height: 80%;

  .divTitulo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    h1 {
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

    #switch:checked + label::after {
      left: 36px;
    }

    #switch:checked + label {
      background-color: ${Colors.Platinum};
    }

    #switch {
      display: none;
    }
  }
`;

/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1])*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

function validate(input) {
  const errors = {};
  if (!input.name) {
    errors.name = "Ingresa el nombre de tu lugar";
  } else if (!/^[\s\S]{1,25}$/.test(input.name)) {
    errors.name = "El nombre solo puede contener entre 1 y 25 caracteres";
  }
  if (!input.personInCharge) {
    errors.personInCharge = "Ingresa el nombre de la persona a cargo del lugar";
  } else if (
    !/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
      input.personInCharge,
    )
  ) {
    errors.personInCharge =
      "El nombre de la persona a cargo solo puede contener letras y espacios. Y debe contener mas de 3 caracteres";
  } else if (!/^[\s\S]{3,25}$/.test(input.personInCharge)) {
    errors.personInCharge =
      "El nombre de la persona a cargo solo puede contener entre 3 y 25 caracteres";
  }

  if (!input.phoneNumber) {
    errors.phoneNumber = "Ingresa un numero de telefono";
  } else if (!/^[0-9]+$/.test(input.phoneNumber)) {
    errors.phoneNumber = "El telefono solo puede contener numeros";
  }

  if (
    input.instagram &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      input.instagram,
    )
  ) {
    errors.instagram = "Ingresa una URL válida. 'example: http://example.com'";
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

export default function ActualizarLocal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userPlace = getUserInfo();
  const place = useSelector((state) => state.detail_place);

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(getDetailPlace(userPlace._id));
    } else {
      navigate("/");
    }
  }, []);

  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: place && place.name ? place.name : "",
    personInCharge: place && place.personInCharge ? place.personInCharge : "",
    city: place && place.city ? place.city : "",
    hasSound: place && place.hasSound ? place.hasSound : false,
    adress: place && place.adress ? place.adress : "",
    phoneNumber: place && place.phoneNumber ? place.phoneNumber : "",
    profilePicture: place && place.profilePicture ? place.profilePicture : image,
    description: place && place.description ? place.description : "",
    capacity: place && place.capacity ? place.capacity : "",
    instagram: place && place.socialMedia ? place.socialMedia.instagram : "",
  });
  console.log(place);
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
    if (input.name && Object.entries(errors).length === 0) {
      await axios.put("/place", {
        email: userPlace.email,
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
      });
      navigate("/");
    } else {
      alert("Por favor complete todos los campos correctamente");
    }
  }

  function handleCheckBox(e) {
    if (e.target.checked) {
      //si esta checkeado se agrega el tipo
      setInput({
        ...input,
        hasSound: true,
      });
    }
    if (!e.target.checked) {
      //si no esta checkeado se quita el tipo
      setInput({
        ...input,
        hasSound: false,
      });
    }
  }

  function handleActivateButton() {
    if (input.name && Object.entries(errors).length === 0) {
      return false;
    }
    return true;
  }

  return (
    <ActualizarDatosStyleCont>
      <div className="divLogo">
        <img src={LogoCircular} alt="" height="150px" width="150px" />
      </div>
      <NavBar Perfil Home />
      <ActualizarDatosStyleCont2>
        <div className="divTitulo">
          <h1>Completa / Edita tus datos</h1>
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="div2Columnas">
            <div className="divInputsColumna1">
              <div className="ContainerInput">
                <span>Nombre local:</span>
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
              {errors.city && <p>{errors.city}</p>}
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
              {errors.adress && <p>{errors.adress}</p>}
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
              {errors.capacity && <p>{errors.capacity}</p>}
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
              <p className="sonidoPropio">Sonido propio</p>
              <div className="SwitchCont">
                <p>Si</p>
                <input
                  value={input.hasSound}
                  id="switch"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e)}
                />
                <label htmlFor="switch" className="label" />
                <p>No</p>
              </div>
            </div>
            <div className="divsColumna2">
              <h1>Foto de perfil</h1>
              <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
                Subir foto
              </button>
              <div className="ImgACargar">
                <img
                  src={image === "" ? place.profilePicture : image}
                  alt="img not found"
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
      </ActualizarDatosStyleCont2>
    </ActualizarDatosStyleCont>
  );
}
