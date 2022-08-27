/* eslint-disable max-len */
import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Utils/colors";

const ReseñasStyleCont = styled.div`
  /* border: solid 3px blueviolet; */

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68.5%;
  background-color: ${Colors.Oxford_Blue_transparent};

  .TitleB {
    /* border: solid 3px yellowgreen; */
    font-family: "New Rocker";
    font-weight: 400;
    font-size: 7rem;
    color: ${Colors.Platinum};
    margin: 10px 10px;
  }

  .comentarios {
    /* border: solid 3px red; */

    background: transparent;
    width: 90%;
    height: 65%;
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

    .coment {
      /* border: solid 3px yellow; */

      background-color: #2d327c55;
      font-family: "RocknRoll One";
      font-weight: 400;
      font-size: 1.6rem;
      color: ${Colors.Platinum};
      margin: 0px 0px 25px 0px;
      padding: 4px 10px;

      .NameRating {
        /* border: solid 3px orangered; */

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 35px;
      }
    }
  }

  /* .Boton {
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
  } */
`;

function ReseñasOpinon({ Opinion, musicBand }) {
  return (
    <ReseñasStyleCont>
      <h1 className="TitleB">{Opinion ? "Opinion" : "Reseñas"}</h1>
      <div className="comentarios">
        {Opinion
          ? "Aqui va tu opinion"
          : musicBand.reviews &&
            musicBand.reviews.map((review) => {
              return (
                <div key={review._id} className="coment">
                  <div className="NameRating">
                    <span className="autor">{review.author}</span>
                    <span className="ratingcoment">Rating: ⭐{review.rating}</span>
                  </div>
                  <p className="contenidocoment">{review.comment}</p>
                  <hr />
                </div>
              );
            })}
      </div>
      {/* {Opinion ? (
        <Link className="Boton" to="/">
          Detalles B
        </Link>
      ) : (
        <Link className="Boton" to="/">
          Detalles A
        </Link>
      )} */}
    </ReseñasStyleCont>
  );
}

export default ReseñasOpinon;
