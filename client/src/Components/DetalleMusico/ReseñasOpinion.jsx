import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import { getDetailMusicBandByEmail } from "../../Redux/actions";
import { getUserInfo } from "../../Utils/auth.controller";

const ReseñasStyleCont = styled.div`
  /* border: solid 3px blueviolet; */

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${Colors.Oxford_Blue_transparent};
  border-radius: 15px;

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
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    .comentar {
      background: ${Colors.Erie_Black_Transparent};
      border-radius: 15px;
      width: 100%;
      height: 100%;
      /* margin-top: 3%; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2%;
      box-sizing: border-box;

      input {
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        border: solid white 1px;
        border-radius: 10px;
        background-color: transparent;
        padding-left: 15px;
        color: ${Colors.Platinum};
        font-family: "RocknRoll One";
        font-size: 16px;
        margin-bottom: 15px;
      }
      input::placeholder {
        color: ${Colors.Platinum};
      }

      .RateComentCont {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          position: relative;
          top: -30px;
          color: #ff00007f;
          font-size: 1.5rem;
        }
        .RateCont {
          /* border: solid red 3px; */
          width: 150px;
          height: fit-content;
          display: flex;
          flex-direction: column;

          .rate {
            /* border: solid red 3px; */
            margin-bottom: 15px;
            font-family: "RocknRoll One";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            text-align: justify;
            color: ${Colors.Platinum};
          }

          .buttons {
            display: flex;
            margin-top: 5%;

            button {
              margin-right: 4%;
            }
          }
        }

        .BTNSubmint {
          width: 150px;
          height: 45px;
          border-radius: 10px;
          background-color: ${Colors.Blue_life};
          border: none;
          transition: all 0.5s ease;

          :hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }

    h6 {
      font-size: 3rem;
      font-weight: 400;
      color: ${Colors.Platinum};
    }

    background: transparent;
    width: 90%;
    height: 100%;
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

function ReseñasOpinion({ musicBand, Opinion, setOpinion }) {
  const dispatch = useDispatch();
  const user = getUserInfo();
  const [render, setRender] = useState(false);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    comment: "",
    rating: 0,
  });

  useEffect(() => {
    dispatch(getDetailMusicBandByEmail(musicBand.email));
  }, [render]);

  const validate = (input) => {
    const errors = {};

    if (!input.comment) errors.comment = "Ingresa un comentario";
    else if (!/^[\s\S]{5,200}$/.test(input.comment)) {
      errors.comment = "El comentario debe tener entre 5 y 200 caracteres";
    }

    if (input.rating === 0) errors.rating = "Seleccione un puntaje";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.comment === "" && input.rating === 0) alert("No puede realizar un comentario vacío");
    else if (Object.keys(errors).length) alert("Check for errors and try again");
    else {
      await axios({
        method: "post",
        url: "/bandreviews",
        data: {
          email: musicBand.email,
          review: {
            author: user.name,
            comment: input.comment,
            rating: Number(input.rating),
          },
        },
        headers: {
          Authorization: localStorage.getItem("user-token"),
        },
      });
      setInput({
        comment: "",
        rating: 0,
      });
      setRender(!render);
      setOpinion(!Opinion);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, comment: e.target.value });
    setErrors(
      validate({
        ...input,
        comment: e.target.value,
      }),
    );
  };

  const handleClick = (e) => {
    setInput({ ...input, rating: e.target.value });
    setErrors(
      validate({
        ...input,
        rating: e.target.value,
      }),
    );
  };

  return (
    <ReseñasStyleCont>
      <h1 className="TitleB">{!Opinion ? "Reseñas" : "Opinion"}</h1>
      <div className="comentarios">
        {Opinion ? (
          <form className="comentar" onSubmit={(e) => handleSubmit(e)}>
            <input placeholder="Ingresa tu comentario" className="input" value={input.comment} onChange={(e) => handleChange(e)} />
            <div className="RateComentCont">
              <div className="RateCont">
                <p className="rate">Puntaje: {input.rating !== 0 ? input.rating : ""}</p>
                <div className="buttons">
                  <button type="button" value={1} onClick={(e) => handleClick(e)}>
                    1
                  </button>
                  <button type="button" value={2} onClick={(e) => handleClick(e)}>
                    2
                  </button>
                  <button type="button" value={3} onClick={(e) => handleClick(e)}>
                    3
                  </button>
                  <button type="button" value={4} onClick={(e) => handleClick(e)}>
                    4
                  </button>
                  <button type="button" value={5} onClick={(e) => handleClick(e)}>
                    5
                  </button>
                </div>
              </div>
              {errors.comment && <span>{errors.comment}</span>}
              {errors.rating && <span>{errors.rating}</span>}
              <button className="BTNSubmint" type="submit">
                Comentar
              </button>
            </div>
          </form>
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
