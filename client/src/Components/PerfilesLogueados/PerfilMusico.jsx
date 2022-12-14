import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgLogo from "../../Assets/img/logo3.png";
import Reseñas from "./Reseñas";
import LogoYouTube from "../../Assets/svg/YouTube.svg";
import LogoSpotify from "../../Assets/svg/Spotyfy.svg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import Editar from "../../Assets/svg/Editar.svg";
import LoaderComponent from "../Loader/Loading";
import { getUserInfo } from "../../Utils/auth.controller";

const EditStyledCont = styled.div`
  /* border: solid 3px red; */
  position: absolute;
  box-sizing: border-box;
  padding-left: 70px;
  width: 100%;
  height: 100vh;
  background-image: url(${BGPerfil});

  .VewContainer {
    /* border: solid 3px blue; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 50px;

    .InfoBandaCont {
      /* border: solid 3px yellow; */
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${Colors.Oxford_Blue_transparent};
      width: 30%;
      height: 95%;
      padding: 25px 35px;
      margin-right: 50px;

      .TitleA {
        /* border: solid 3px yellow; */
        font-family: "New Rocker";
        font-weight: 400;
        font-size: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${Colors.Platinum};
        margin: 0px 0px 25px 0px;
        width: 100%;
      }

      #ImgPerfil {
        border: white solid 1px;
        object-fit: cover;
        width: 100%;
        height: 30%;
      }

      .divContenedorDescripcion {
        /* border: solid 3px red; */

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 10px;

        overflow-y: scroll;
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

        .divsDescripcionCont {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;

          .divsDescripcion {
            /* border: solid 3px green; */

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: fit-content;
            margin: 4px 0px;

            .Azules {
              /* border: solid 3px purple; */
              font-family: "RocknRoll One";
              letter-spacing: -1px;
              font-weight: 400;
              font-size: 2.3rem;
              color: ${Colors.Blue_Vivid};
              margin: 0px 5px 0px 0px;
              height: fit-content;
            }
            .Blancos {
              /* border: solid 3px palegreen; */

              font-family: "RocknRoll One";
              font-weight: 400;
              font-size: 1.8rem;
              margin: 6px 0px 0px 0px;
              color: ${Colors.Platinum};
              height: fit-content;
            }
          }
        }

        .RedesyEditarCont {
          /* border: solid 3px purple; */
          display: flex;
          justify-content: space-between;
          align-items: center;

          .RedesCont {
            /* border: solid 3px orange; */
            height: auto;
            width: 50%;
            padding: 10px;
            display: flex;
            justify-content: center;

            a {
              /* border: solid 3px purple; */
              display: flex;
              justify-content: center;
              align-items: center;
              width: 46px;
              height: 46px;
              border-radius: 50px;
              margin: 0px 5%;

              .ImglogosRedes {
                width: 40px;
                height: 40px;
                padding: 4px;
                border-radius: 50px;
                background-color: white;
                margin: 0px 20px;
                transition: all 0.5s ease;

                :hover {
                  cursor: pointer;
                  transform: scale(1.2);
                }
              }
            }
          }

          .divEditar {
            /* border: solid 3px blue; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .imgEditar {
              border: solid 3px black;
              cursor: pointer;
              width: 40px;
              height: 40px;
              border-radius: 50px;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.5s ease;

              :hover {
                cursor: pointer;
                transform: scale(1.2);
              }

              img {
                width: 30px;
                height: 30px;
              }
            }

            h4 {
              font-family: "RocknRoll One";
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 14px;
              margin: 5px 0px 0px 0px;
              color: white;
            }
          }
        }
      }
    }

    .ReseñasLogoCont {
      /* border: solid 3px gray; */

      width: 70%;
      height: 89%;

      .divImgLogo {
        /* border: solid 3px blue; */

        display: flex;
        justify-content: center;
        width: 100%;

        #imgLogo {
          /* border: solid 3px blueviolet; */
          width: 36%;
          margin: 0px 0px 25px 0px;
        }
      }

      /* .BotonOpinion {
        position: relative;
        left: 79%;
        top: 9%;
        border: none;
        font-family: "New Rocker";
        font-weight: 400;
        font-size: 2rem;
        border-radius: 10px;
        background-color: ${Colors.Blue_life};
        width: 15%;
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
      */
    }
  }

  & .spancito {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  & .buttonCont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .buttonCont2 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .buttonToastAcept {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #adc178;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #64923c;
      color: ${Colors.Platinum};
      transition: 0.3s;
    }
  }
  & .buttonToastCancel {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #ff9b85;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #ee6055;
      color: ${Colors.Platinum};
      transition: 0.3s;
    }
  }

  .POPContainer {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 70px;
    right: 0px;
    width: 85%;
    height: 85%;
    margin: auto;
    z-index: ${({ zIndex }) => (zIndex ? 0 : 100)};
  }
`;

const Blocker = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  position: fixed;
  z-index: ${({ block }) => (block ? 2100 : -1)};
`;

export default function PerfilMusico() {
  const dispatch = useDispatch();
  const user = getUserInfo();
  const navigate = useNavigate();
  const musicBand = useSelector((state) => state.detail_music_band);
  const [loading, setLoading] = useState(false);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getDetailMusicBand(user._id));
  }, []);

  if (musicBand.banned === true || musicBand.disabled === true) navigate("/");

  return (
    <div>
      {loading ? (
        <div>
          <Blocker block={block} />
          <EditStyledCont Foto={musicBand}>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "",
                style: {
                  fontSize: "1.5rem",
                  fontFamily: "RocknRoll One",
                },
              }}
            />
            <NavBar HomeLinkBanda Home Eventos UserLog block={block} setBlock={setBlock} />
            <div className="VewContainer">
              <div className="InfoBandaCont">
                <h1 className="TitleA">{musicBand.name}</h1>
                <img id="ImgPerfil" src={musicBand.profilePicture} alt="Foto Perfil" />
                <div className="divContenedorDescripcion">
                  <div className="divsDescripcionCont">
                    <div className="divsDescripcion">
                      <span className="Azules">Persona a Cargo:</span>
                      <h3 className="Blancos">{musicBand.personInCharge}</h3>
                    </div>
                    <div className="divsDescripcion">
                      <span className="Azules">Email:</span>
                      <h3 className="Blancos">{musicBand.email}</h3>
                    </div>
                    <div className="divsDescripcion">
                      <span className="Azules">Telefono:</span>
                      <h3 className="Blancos">{musicBand.phoneNumber}</h3>
                    </div>
                    <div className="divsDescripcion">
                      <h3 className="Blancos">
                        <span className="Azules">Descripción:</span>
                        {musicBand.description}
                      </h3>
                    </div>
                    <div className="divsDescripcion">
                      <span className="Azules">Rating:</span>
                      <h3 className="Blancos">⭐{musicBand.rating}</h3>
                    </div>
                  </div>
                  <div>
                    <div className="RedesyEditarCont">
                      <div className="RedesCont">
                        {musicBand.socialMedia && musicBand.socialMedia.youtube !== "" ? (
                          <a target="_blank" href={musicBand.socialMedia.youtube} rel="noreferrer">
                            <img className="ImglogosRedes" src={LogoYouTube} alt="" />
                          </a>
                        ) : null}
                        {musicBand.socialMedia && musicBand.socialMedia.spotify !== "" ? (
                          <a target="_blank" href={musicBand.socialMedia.spotify} rel="noreferrer">
                            <img className="ImglogosRedes" src={LogoSpotify} alt="" />
                          </a>
                        ) : null}
                        {musicBand.socialMedia && musicBand.socialMedia.instagram !== "" ? (
                          <a target="_blank" href={musicBand.socialMedia.instagram} rel="noreferrer">
                            <img className="ImglogosRedes" src={LogoInstagram} alt="" />
                          </a>
                        ) : null}
                      </div>
                      <div className="divEditar">
                        <Link to="/actualizarbanda" className="imgEditar">
                          <img src={Editar} alt="Edit" />
                        </Link>
                        <h4>Editar</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ReseñasLogoCont">
                <div className="divImgLogo">
                  <img id="imgLogo" src={ImgLogo} alt="" />
                </div>
                <Reseñas musicBand={musicBand} />
              </div>
            </div>
          </EditStyledCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
