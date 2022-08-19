import React from "react";
import styled from "styled-components";
import color from "../../Utils/colors";

const CardStyleCont = styled.div`
  box-sizing: border-box;
  width: 46%;
  height: 404px;
  background-color: ${color.Green_Nigth};
  border: 3px solid ${color.Platinum};
  display: flex;
  margin: 65px 0px;

  
  .CardInfo {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .CardImage {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
  }

  .name{
  font-family: 'New Rocker';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  color: ${color.Green_Light};
  text-align: center;
  }

  .PropCont {
    display: flex;
    justify-content: center;
  }

  .prop {
  margin-right: 10px;
  font-family: 'RocknRoll One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: ${color.Green_Light};
  }

  .value {
  font-family: 'RocknRoll One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: ${color.Platinum};
  }

  .rating {
  font-family: 'RocknRoll One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: ${color.Platinum};
  }

  .detailButton {
  width: 30%;
  height: 12%;
  background: ${color.Green_Light};
  border-radius: 10px;
  font-family: 'New Rocker';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: ${color.Erie_Black};
  }
`;

function CardPlace({ name, city, rating, image, sound }) {
  return (
    <CardStyleCont>
      <div className="CardInfo">
        <span className="name">{name}</span>
        <div className="PropCont">
          <span className="prop">Ciudad:</span>
          <span className="value">{city}</span>
        </div>
        <div className="PropCont">
          <span className="prop">Sonido Propio:</span>
          <span className="value">{sound}</span>
        </div>
        <div className="rating">
          Rating: {rating}
        </div>
        <button className="detailButton" type="button">Detalle</button>
      </div>
      <img className="CardImage" src={image} alt="Not found" />
    </CardStyleCont>
  );
}

export default CardPlace;
