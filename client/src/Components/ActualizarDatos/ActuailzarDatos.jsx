/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import { isAuthenticated, getUserInfo } from "../../Utils/auth.controller";
import { resetDetails, getDetailMusicBand } from "../../Redux/actions";
import LoaderComponent from "../Loader/Loading";
import "react-confirm-alert/src/react-confirm-alert.css";

const ActualizarDatosStyleCont = styled.div`
  box-sizing: border-box;
  background-image: url(${BGPerfil});
  width: 100%;
  height: 100vh;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  .divButtonDesc {
    position: absolute;
    right: 20px;
    bottom: 20px;

    .BTNsDesc {
      font-family: "New Rocker";
      font-style: normal;
      font-weight: 200;
      font-size: 20px;
      width: 200px;
      line-height: 45px;
      background-color: black;
      border-radius: 10px;
      margin-top: 20px;
      cursor: pointer;
      color: white;
    }
    .BTNsDesc:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

const ActualizarDatosStyleCont2 = styled.div`
  /* border: solid #ff0000 3px; */

  box-sizing: border-box;
  background-color: ${Colors.Oxford_Blue_transparent};
  border-radius: 15px;
  width: 80%;
  height: 80%;
  font-family: "New Rocker", cursive;
  font-size: 8rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px;

  h1 {
    /* border: solid #eaff00 3px; */

    font-family: "New Rocker", cursive;
    margin: 20px 0px;
    font-size: 5rem;
    width: 100%;
    text-align: center;
    color: ${Colors.Platinum};
  }

  .formyCargarImagen {
    /* border: solid #eaff00 3px; */

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .form {
      /* border: solid #ff00ee 3px; */
      box-sizing: border-box;
      height: 100%;
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .inputs {
        /* border: solid 3px red; */
        width: 100%;
        display: flex;
        flex-direction: column;

        & .div {
          /* border: solid 3px #fff; */
          width: 100%;
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          justify-content: center;
          margin: 10px 0px;
          border-bottom: 3px solid ${Colors.Blue_Vivid};

          & span {
            /* border: solid 3px yellow; */
            font-size: 2rem;
            width: 100%;
          }

          .input {
            /* border: solid 3px yellow; */
            width: 60%;
            line-height: 28px;
            border: 2px solid transparent;
            padding: 0.2rem 0;
            outline: none;
            background-color: transparent;
            color: ${Colors.Platinum};
            transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            margin: 0px 0px 0px 15px;
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
            font-size: 1.5rem;
            opacity: 50%;
          }

          .input:focus::placeholder {
            opacity: 0;
            transition: opacity 0.3s;
          }

          .textarea {
            /* border: solid 3px red; */

            resize: none;
            opacity: 100%;
            width: 100%;
            border: 2px solid transparent;
            /* border-bottom-color: ${Colors.Blue_Vivid}; */
            padding: 0.2rem 0;
            outline: none;
            background-color: transparent;
            color: ${Colors.Platinum};
            transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            margin: 5px 0px 5px 8px;
            font-size: 1.5rem;
            height: 6rem;
            /* display: flex; */

            &::-webkit-scrollbar {
              width: 12px;
            }
            &::-webkit-scrollbar-track {
              background: ${Colors.Oxford_Blue_transparent};
            }
            &::-webkit-scrollbar-thumb {
              background-color: #14213d;
              border-radius: 25px;
              border: 1px solid white;
            }
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
      }
    }

    .cargarImagen {
      /* border: solid #ff00ee 3px; */

      box-sizing: border-box;
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 4rem;

      h3 {
        font-family: "New Rocker", cursive;
        font-size: 4rem;
        font-weight: 400;
        color: ${Colors.Platinum};
        margin: 15px 0px;
      }

      img {
        width: 350px;
        height: 350px;
        border: 3px solid ${Colors.Blue_Vivid};
        border-radius: 10px;
        object-fit: cover;
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
        margin-top: 0px;
        transition: all 0.5s ease;

        :hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }
    }
  }

  button {
    border: none;
    font-family: "New Rocker";
    font-weight: 400;
    font-size: 2rem;
    border-radius: 10px;
    line-height: 49px;
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
    errors.personInCharge = "El nombre de la persona a cargo puede contener entre 3 y 25 caracteres";
  }
  if (!input.phoneNumber) {
    errors.phoneNumber = "Ingresa un numero de telefono";
  } else if (!/^[0-9]+$/.test(input.phoneNumber)) {
    errors.phoneNumber = "El telefono solo puede contener numeros";
  }
  if (
    input.instagram &&
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.instagram)
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
  if (input.spotify && !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.spotify)) {
    errors.spotify = "Ingresa una URL válida. 'example: http://example.com'";
  }
  if (input.youtube && !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(input.youtube)) {
    errors.youtube = "Ingresa una URL válida. 'example: http://example.com'";
  }
  return errors;
}

export default function upLoadData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userBand = getUserInfo();
  const musicBand = useSelector((state) => state.detail_music_band);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (isAuthenticated()) {
      dispatch(getDetailMusicBand(userBand._id));
    } else {
      navigate("/");
    }
  }, []);

  const [errors, setErrors] = useState({});

  const [image, setImage] = useState("");

  const [input, setInput] = useState({
    name: musicBand && musicBand.name ? musicBand.name : "",
    personInCharge: musicBand && musicBand.personInCharge ? musicBand.personInCharge : "",
    description: musicBand && musicBand.description ? musicBand.description : "",
    profilePicture: musicBand && musicBand.profilePicture ? musicBand.profilePicture : image,
    phoneNumber: musicBand && musicBand.phoneNumber ? musicBand.phoneNumber : "",
    instagram: musicBand && musicBand.socialMedia ? musicBand.socialMedia.instagram : "",
    spotify: musicBand && musicBand.socialMedia ? musicBand.socialMedia.spotify : "",
    youtube: musicBand && musicBand.socialMedia ? musicBand.socialMedia.youtube : "",
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
      toast.success("Datos actualizados con éxito");

      const { data } = await axios({
        method: "post",
        url: "/refreshToken",
        data: {
          email: userBand.email,
        },
      });

      if (data) localStorage.setItem("user-token", data);

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
      dispatch(resetDetails([]));
      navigate(`/musicbandprofile/${userBand._id}`);
    } else {
      toast.error("¡Ups! Hay algún problema, revisa la información");
    }
  }

  async function handleClick(e) {
    e.preventDefault();
    confirmAlert({
      title: "Desactivar cuenta",
      message: "¿Realmente desea desactivar su cuenta? Si tiene eventos confirmados o postulados se cancelaran",
      buttons: [
        {
          label: "Sí",
          onClick: async () => {
            await axios.put("/bandDisabled", {
              email: musicBand.email,
              disabled: true,
            });
            localStorage.removeItem("user-token");
            navigate("/iniciarsesion");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <div>
      {loading ? (
        <ActualizarDatosStyleCont>
          <NavBar Home />
          <ActualizarDatosStyleCont2>
            <h1>Completa/edita tus datos</h1>
            <div className="formyCargarImagen">
              <form className="form">
                <div className="inputs">
                  <div className="div">
                    <span>
                      Nombre:
                      <input
                        id="input1"
                        type="text"
                        placeholder="Nombre de la banda o solista"
                        className="input"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.name && <p className="errors">{errors.name}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Persona a cargo:
                      <input
                        type="text"
                        placeholder="Persona a cargo"
                        className="input"
                        value={input.personInCharge}
                        name="personInCharge"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.personInCharge && <p className="errors">{errors.personInCharge}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Teléfono:
                      <input
                        type="tel"
                        placeholder="Teléfono de contacto"
                        className="input"
                        value={input.phoneNumber}
                        name="phoneNumber"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Instagram:
                      <input
                        type="text"
                        placeholder="Instagram"
                        className="input"
                        value={input.instagram}
                        name="instagram"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.instagram && <p className="errors">{errors.instagram}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Spotify:
                      <input
                        type="text"
                        placeholder="Spotify"
                        className="input"
                        value={input.spotify}
                        name="spotify"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.spotify && <p className="errors">{errors.spotify}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Youtube:
                      <input
                        type="text"
                        placeholder="Youtube"
                        className="input"
                        value={input.youtube}
                        name="youtube"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.youtube && <p className="errors">{errors.youtube}</p>}
                  </div>
                  <div className="div">
                    <span>
                      Descripción:
                      <textarea
                        type="text"
                        placeholder="Descripción"
                        className="textarea"
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                      />
                    </span>
                    {errors.description && <p className="errors">{errors.description}</p>}
                  </div>
                </div>
              </form>
              <div className="cargarImagen">
                <h3>Foto de perfil</h3>
                <div>
                  <img src={image === "" ? musicBand.profilePicture : image} alt="Ingresa una imagen" />
                </div>
                <button type="button" id="btn-foto" onClick={() => handleOpenWidget()}>
                  Subir foto
                </button>
              </div>
            </div>
            <button type="button" className="BTNActualizar" onClick={(e) => handleSubmit(e)}>
              Actualizar
            </button>
          </ActualizarDatosStyleCont2>
          <div className="divButtonDesc">
            <button type="button" className="BTNsDesc" onClick={(e) => handleClick(e)}>
              Desactivar cuenta
            </button>
          </div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </ActualizarDatosStyleCont>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
