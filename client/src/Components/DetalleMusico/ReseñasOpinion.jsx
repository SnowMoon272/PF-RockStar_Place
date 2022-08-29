/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";

const ReseñasStyleCont = styled.div`
  /* border: solid 3px blueviolet; */

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
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
    display: flex;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h6 {
      font-size: 3rem;
      font-weight: 400;
      color: ${Colors.Platinum};
    }

    background: transparent;
    width: 90%;
    height: 74%;
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
      width: 95%;
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
`;

function ReseñasOpinion({ musicBand, Opinion }) {
  return (
    <ReseñasStyleCont>
      <h1 className="TitleB">Reseñas</h1>
      <div className="comentarios">
        {Opinion ? (
          "Aqui va tu opinion"
        ) : musicBand.reviews ? (
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
          })
        ) : (
          <h6>Este perfil aún no tiene reseñas.</h6>
        )}
      </div>
    </ReseñasStyleCont>
  );
}

export default ReseñasOpinion;
