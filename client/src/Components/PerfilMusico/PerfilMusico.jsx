/* eslint-disable no-confusing-arrow */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgRollingStones from "../../Assets/img/ROLLING STONES.jpg";
import ImgLogo from "../../Assets/img/logo3.png";
import Estrella from "../../Assets/svg/Estrella_amarilla_rellena.svg";
import LogoYouTube from "../../Assets/svg/YouTube.svg";
import LogoSpotify from "../../Assets/svg/Spotyfy.svg";
import LogoInstagram from "../../Assets/svg/Instagram.svg";
import Editar from "../../Assets/svg/Editar.svg";

const EditStyledCont = styled.div`
  border: solid 3px red;
  box-sizing: border-box;
  padding-left: 70px;
  width: 100%;
  height: 100vh;
  background-image: url(${BGPerfil});

  .VewContainer {
    border: solid 3px blue;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 50px;

    .InfoBandaCont {
      border: solid 3px yellow;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${Colors.Oxford_Blue_transparent};
      width: 50%;
      height: 95%;
      padding: 25px 35px;
      margin-right: 50px;

      .TitleA {
        border: solid 3px yellow;
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
        width: 100%;
        height: 230px;
      }
      .divContenedorDescripcion {
        border: solid 3px red;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 10px;

        .divsDescripcion {
          border: solid 3px green;

          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: fit-content;

          .Azules {
            border: solid 3px purple;
            font-family: "RocknRoll One";
            letter-spacing: -1px;
            font-weight: 300;
            font-size: 2rem;
            color: ${Colors.Blue_Vivid};
            margin: 0px 5px 0px 0px;
            height: fit-content;
          }
          .Blancos {
            border: solid 3px palegreen;

            font-family: "RocknRoll One";
            font-weight: 400;
            font-size: 1.4rem;
            margin: 0px;
            color: ${Colors.Platinum};
            height: fit-content;
          }
        }

        .RedesyEditarCont {
          border: solid 3px purple;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .RedesCont {
            border: solid 3px orange;
            height: auto;
            width: 50%;
            padding: 10px;
            display: flex;
            justify-content: center;

            a {
              display: flex;
              justify-content: center;
              align-items: center;
              border: solid 3px purple;
              width: 46px;
              height: 46px;
              border-radius: 50px;
              margin: 0px 20px;

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
            border: solid 3px blue;
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
              margin: 10px 0px 10px 0px;
              color: white;
            }
          }
        }
      }
    }

    .ReseñasLogoCont {
      border: solid 3px gray;

      width: 120vh;

      .divImgLogo {
        border: solid 3px blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vh;
        margin: 25px 25px 25px 25px;
        #imgLogo {
          border: solid 3px blueviolet;

          width: 300px;
        }
      }

      .divResenas {
        border: solid 3px blueviolet;

        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60vh;
        background-color: rgba(20, 33, 61, 0.75);

        .TitleB {
          border: solid 3px yellowgreen;
          font-family: "New Rocker";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 79px;
          display: flex;
          align-items: center;
          text-align: center;
          color: white;
          margin: 2px 2px 2px 2px;
        }

        .comentarios {
          border: solid 3px blue;

          background: rgba(229, 229, 229, 0.5);
          width: 100%;
          margin-top: 3%;
          height: 400px;
          overflow-y: scroll;

          .coment {
            border: solid 3px orange;

            font-family: "RocknRoll One";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            color: ${Colors.Platinum};
            margin: 4% 0%;
            padding: 0% 3%;
            .NameRating {
              border: solid 3px orangered;

              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }
`;

const reviews = [
  {
    author: "Dabchick",
    comment: "Excelente, cumplieron con todo",
    rating: 5,
    _id: "62ff90dea8e5ca245040b11d",
  },
  {
    author: "Wild boar",
    comment: "Me rompieron el baño",
    rating: 1,
    _id: "62ff9102a8e5ca245040b123",
  },
  {
    author: "Lapwing (unidentified)",
    comment: "Muy profesionales",
    rating: 4,
    _id: "62ff9142a8e5ca245040b12a",
  },
  {
    author: "Wallaby, euro",
    comment: "Llegaron un poco tarde, pero bien",
    rating: 3,
    _id: "6302c0659497c20b077c5b43",
  },
  {
    author: "Tapir, brazilian",
    comment: "Cumplieron con todo lo pactado",
    rating: 4,
    _id: "6303716e2e59e75db909234d",
  },
  {
    author: "Banded mongoose",
    comment: "Todo ok",
    rating: 5,
    _id: "6303aa36d3d008a3ee75e513",
  },
  {
    author: "Red-necked phalarope",
    comment: "Me hicieron ganar mucho dinero",
    rating: 5,
    _id: "6303aa42d3d008a3ee75e526",
  },
];

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
  console.log(musicBand);
  useEffect(() => {
    dispatch(getDetailMusicBand(params.id));
  }, [dispatch]);

  return (
    <EditStyledCont Foto={musicBand}>
      <NavBar HomeLinkBanda Home Eventos Perfil UserLog />
      <div className="VewContainer">
        <div className="InfoBandaCont">
          <h1 className="TitleA">{musicBand.name}</h1>
          <img id="ImgPerfil" src={ImgRollingStones} alt="" />
          <div className="divContenedorDescripcion">
            <div className="divsDescripcion">
              <h2 className="Azules">Persona a Cargo:</h2>
              <h3 className="Blancos">{musicBand.personInCharge}</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Email:</h2>
              <h3 className="Blancos">{musicBand.email}</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Telefono:</h2>
              <h3 className="Blancos">+54 911 6666-6666</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Descripción:</h2>
              <h3 className="Blancos">Acá va la descripcion de la banda/solista</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Rating:</h2>
              <h3 className="Blancos">⭐{musicBand.rating}</h3>
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
                <div className="divEditar">
                  <div className="imgEditar">
                    <img src={Editar} alt="Edit" />
                  </div>
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
          <div className="divResenas">
            <h1 className="TitleB">Reseñas</h1>
            <div className="comentarios">
              {reviews &&
                reviews.map((review) => {
                  return (
                    <div key={review._id} className="coment">
                      <div className="NameRating">
                        <span className="autor">{review.author}</span>
                        <span className="ratingcoment">Rating: {review.rating}</span>
                      </div>
                      <p className="contenidocoment">{review.comment}</p>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </EditStyledCont>
  );
}
