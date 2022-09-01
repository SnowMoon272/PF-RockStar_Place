import React from "react";
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
  const handlerNotif = (e) => {
    setSwitchNotif(!SwitchNotif);
  };
  return (
    <ContainerGralStyled>
      <h1>Banda / Local</h1>
      <div className="Section">
        <div className="SectionA">
          <h2>Nombre de la Banda/Local</h2>
          <div className="InfoPersonal">
            <p>
              <span>Persona a cargo: </span>Manuel R Serrano T
            </p>
            <p>
              <span>Telefono: </span>(+52) 55 6192 2596
            </p>
            <p>
              <span>Ciudad: </span>Buenos Aires
            </p>
            <p>
              <span>Email: </span>CastielAltair0027@outlook.com
            </p>
            <p>
              <span>Direccion: </span>Av. Siempre Viva #54
            </p>
            <p>
              <span>Capacidad: </span>110 personas
            </p>
            <p>
              <span>Sonido propio: </span> Si
            </p>
          </div>
        </div>
        <div className="SectionB">
          <p>
            <span>Descripción: </span>Manuel Serrano Nacido en 1995 es un musico, compositor,
            productor y pianista britanico de soul clasico. Serrano fue el pianista mas vendido de
            2020 en el Reino Unido y encabezo el Royal Albert Hall de Londres.
          </p>
          <p>
            <span>Rating: </span>⭐4.68
          </p>
        </div>
        <div className="SectionC">
          <img src={IMGBanda} alt="Banda" />
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
    </ContainerGralStyled>
  );
}

export default ModoNotificar;
