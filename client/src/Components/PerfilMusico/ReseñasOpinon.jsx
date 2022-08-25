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
        justify-content: space-around;
      }
    }
  }

  .Boton {
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
    comment:
      "Muy profesionales pero sinceramente prefiero pasar mis tardes comiendo carne seca sentado esdñlkifjgjpsiorlfjbopijlsfgjhio sdlfigojjsd lfiug hspdifu ghpiosdff bgpiosdf fjpgoi sdfiopu gsldiof gliosud fgpiousd fhlgiusndfbd vlbkjsdrfg oibuwhn  n mi sillon mientraskjñlk fpgois dfoiughjasdpoifjgpoaisd fpogishjd fligu asd.",
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

function ReseñasOpinon({ Reseñas, Opinion }) {
  return (
    <ReseñasStyleCont>
      <h1 className="TitleB">Reseñas</h1>
      <div className="comentarios">
        {reviews &&
          reviews.map((review) => {
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
      <Link className="Boton" to="/">
        Detalles
      </Link>
    </ReseñasStyleCont>
  );
}

export default ReseñasOpinon;
