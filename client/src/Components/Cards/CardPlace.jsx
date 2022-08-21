import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../Utils/colors";

const CardStyleCont = styled.div`
  box-sizing: border-box;
  width: 47%;
  height: 270px;
  background-color: ${color.Green_Nigth};
  border: 3px solid ${color.Platinum};
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
    color: ${color.Green_Light};
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
  }

  .prop {
    margin-right: 10px;
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 29px;
    text-align: center;
    color: ${color.Green_Light};
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
    height: 12%;
    background: ${color.Green_Light};
    border-radius: 10px;
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    color: ${color.Erie_Black};
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

function CardPlace({ name, city, rating, image, sound }) {
  return (
    <CardStyleCont>
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
            <span className="value"> {rating}</span>
          </div>
        </div>
        <Link to="/place/:email" className="detailButton">
          Detalle
        </Link>
      </div>
      <img className="CardImage" src={image} alt="Not found" />
    </CardStyleCont>
  );
}

export default CardPlace;
