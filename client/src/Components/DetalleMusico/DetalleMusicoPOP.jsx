/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Colors from "../../Utils/colors";
import { getDetailMusicBand } from "../../Redux/actions";
import ImgLogo from "../../Assets/img/logo3.png";
import Reseña from "./Reseña";
import LogoYouTube from "../../Assets/svg/YouTube.svg";
import LogoSpotify from "../../Assets/svg/Spotyfy.svg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import SVGCerrar from "../../Assets/svg/Cerrar.svg";

const EditStyledCont = styled.div`
  /* border: solid 3px red; */
  position: fixed;
  box-sizing: border-box;
  padding-left: 70px;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.Erie_Black};

  .BTNCerrar {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: ${Colors.Erie_Black};
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
    }
  }

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
        }
      }
    }

    .ReseñasLogoCont {
      /* border: solid 3px gray; */

      width: 70%;
      height: 100%;

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
    }
  }
`;

const musicBandMockeada = {
  socialMedia: {
    instagram: "notevagustaroficial",
    spotify: "4ZDoy7AWNgQVmX7T0u0B1j",
    youtube: "NoTeVaGustarOficial",
  },
};

export default function PerfilMusico() {
  const dispatch = useDispatch();
  const params = useParams();
  const musicBand = useSelector((state) => state.detail_music_band);

  useEffect(() => {
    dispatch(getDetailMusicBand(params.id));
  }, []);

  return (
    <EditStyledCont Foto={musicBand}>
      <button
        name="Search"
        onClick={(e) => handlerSubmintCloseSearch(e)}
        type="button"
        className="BTNCerrar"
      >
        <img src={SVGCerrar} alt="" />
      </button>

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
                  <a href={`http://www.youtube.com/c/${musicBandMockeada.socialMedia.youtube}`}>
                    <img className="ImglogosRedes" src={LogoYouTube} alt="" />
                  </a>
                  <a
                    href={`http://open.spotify.com/artist/${musicBandMockeada.socialMedia.spotify}`}
                  >
                    <img className="ImglogosRedes" src={LogoSpotify} alt="" />
                  </a>
                  <a href={`http://instagram.com/${musicBandMockeada.socialMedia.instagram}`}>
                    <img className="ImglogosRedes" src={LogoInstagram} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReseñasLogoCont">
          <div className="divImgLogo">
            <img id="imgLogo" src={ImgLogo} alt="" />
          </div>
          <Reseña musicBand={musicBand} />
        </div>
      </div>
    </EditStyledCont>
  );
}