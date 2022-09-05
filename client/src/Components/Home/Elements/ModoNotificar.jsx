import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../../Utils/colors";

import IMGBanda from "../../../Assets/img/ROLLING STONES.jpg";

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
  }

  & h1 {
    /* border: #ffea00 solid 3px; */
    width: 100%;
    text-align: center;
    font-family: "New Rocker", cursive;
    margin: 0px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 4rem;
  }

  & .Section {
    /* border: #001eff solid 3px; */

    box-sizing: border-box;
    width: 100%;
    height: 82%;
    display: flex;

    & .SectionA {
      /* border: #37ff00 solid 3px; */

      box-sizing: border-box;
      width: 33.33%;
      padding: 20px;

      & h2 {
        /* border: #ffea00 solid 3px; */
        width: 100%;
        text-align: center;
        font-family: "New Rocker", cursive;
        margin: 0px;
        margin-bottom: 15px;
        font-size: 2.5rem;
        font-weight: 400;
      }

      & .InfoPersonal {
        /* border: #dd00ff solid 3px; */

        box-sizing: border-box;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & p {
          margin: 3px 0px;
          font-size: 1.3rem;
          font-weight: 400;

          & span {
            font-weight: 600;
            font-size: 1.8rem;
            color: ${Colors.Blue_Vivid};
          }
        }
      }
    }
    & .SectionB {
      /* border: #37ff00 solid 3px; */

      box-sizing: border-box;
      width: 33.33%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & p {
        margin: 3px 0px;
        font-size: 1.3rem;
        font-weight: 400;

        & span {
          font-weight: 600;
          font-size: 1.8rem;
          color: ${Colors.Blue_Vivid};
        }
      }
    }
    & .SectionC {
      /* border: #37ff00 solid 3px; */

      box-sizing: border-box;
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      & img {
        width: 350px;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
      }

      & button {
        font-family: "New Rocker", cursive;
        background-color: ${Colors.Blue_life};
        width: 130px;
        font-size: 2rem;
        font-weight: 400;
        border: none;
        border-radius: 8px;
        color: ${Colors.Platinum};
        transition: all 0.5s ease;
        padding: 6px;

        :hover {
          transform: scale(1.2);
          cursor: pointer;
          border: none;
        }
      }
    }
  }
`;

function ModoNotificar({ SwitchNotif, setSwitchNotif }) {
  const place = useSelector((state) => state.detail_place);
  const musicBand = useSelector((state) => state.detail_music_band);
  const clickTipe = useSelector((state) => state.admin_click);

  const handlerNotif = (e) => {
    setSwitchNotif(!SwitchNotif);
  };
  return (
    <ContainerGralStyled>
      {clickTipe !== "default" ? (
        <>
          <h1>Banda / Local</h1>
          <div className="Section">
            <div className="SectionA">
              <h2>{clickTipe === "local" ? place.name : musicBand.name}</h2>
              <div className="InfoPersonal">
                <p>
                  <span>Persona a cargo: </span>
                  {clickTipe === "local" ? place.personInCharge : musicBand.personInCharge}
                </p>
                <p>
                  <span>Telefono: </span> {clickTipe === "local" ? place.phoneNumber : musicBand.phoneNumber}
                </p>
                {clickTipe === "local" && (
                  <p>
                    <span>Ciudad: </span>
                    {place.city};
                  </p>
                )}
                <p>
                  <span>Email: </span>
                  {clickTipe === "local" ? place.email : musicBand.email}
                </p>
                {clickTipe === "local" && (
                  <p>
                    <span>Direccion: </span>
                    {place.adress};
                  </p>
                )}
                {clickTipe === "local" && (
                  <p>
                    <span>Capacidad: </span>
                    {place.capacity};
                  </p>
                )}
                {clickTipe === "local" && (
                  <p>
                    <span>Sonido propio: </span>
                    {place.hasSound ? "si" : "No"};
                  </p>
                )}
              </div>
            </div>
            <div className="SectionB">
              <p>
                <span>Descripción: </span>
                {clickTipe === "local" ? place.description : musicBand.description}
              </p>
              <p>
                <span>Rating: </span>⭐{clickTipe === "local" ? place.rating : musicBand.rating}
              </p>
            </div>
            <div className="SectionC">
              <img src={clickTipe === "local" ? place.profilePicture : musicBand.profilePicture} alt="Banda/Local" />
              <button
                type="button"
                onClick={(e) => {
                  handlerNotif(e);
                }}
              >
                Notificar
              </button>
            </div>
          </div>
        </>
      ) : (
        <h1 id="fraseNone">Aquí podrá visualizar y notificar usuarios, luego de que seleccione alguno del listado que está debajo.</h1>
      )}
    </ContainerGralStyled>
  );
}

export default ModoNotificar;
