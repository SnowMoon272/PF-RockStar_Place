import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../Utils/colors";

const CardStyleCont = styled.div`
  box-sizing: border-box;
  width: 47%;
  height: 270px;
  background-color: ${({ UserLog }) => (UserLog ? color.Oxford_Blue : color.Green_Nigth)};
  border: 1px solid ${color.Platinum};
  display: flex;
  justify-content: space-between;
  margin: 20px 2px;

  .CardInfo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .CardImage {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .name {
    font-family: "New Rocker";
    font-size: 3rem;
    color: ${({ UserLog }) => (UserLog ? color.Platinum : color.Green_Light)};
    text-align: center;
  }

  .InfLow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .PropCont {
    display: flex;
    justify-content: center;
    align-items: centerc;
  }

  .prop {
    margin-right: 10px;
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 29px;
    text-align: center;
    color: ${({ UserLog }) => (UserLog ? color.Blue_Vivid : color.Green_Light)};
  }

  .value {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: ${color.Platinum};
  }

  .detailButton {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    width: 50%;
    height: 14%;
    background-color: ${({ UserLog }) => (UserLog ? color.Blue_life : color.Green_Light)};
    color: ${({ UserLog }) => (UserLog ? color.Platinum : color.Erie_Black)};
    border-radius: 6px;
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;

    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

function CardPlace({ id, name, city, rating, image, sound, UserLog }) {
  return (
    <CardStyleCont UserLog={UserLog}>
      <div className="CardInfo">
        <span className="name">{name}</span>
        <div className="InfLow">
          <div className="PropCont">
            <span className="prop">Ciudad:</span>
            <span className="value">{city}</span>
          </div>
          <div className="PropCont">
            <span className="prop">Sonido Propio:</span>
            <span className="value">{sound}</span>
          </div>
          <div className="PropCont">
            <span className="prop">Rating: </span>
            <span className="value">⭐{rating}</span>
          </div>
        </div>
        <Link to={`/place/${id}`} className="detailButton">
          Detalle
        </Link>
      </div>
      <img className="CardImage" src={image} alt="Not found" />
    </CardStyleCont>
  );
}

export default CardPlace;
