import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "../../Utils/colors";
import validate from "../DetailPlace/validationsComment";
import { getUserInfo } from "../../Utils/auth.controller";
//import { getDetailMusicBandByEmail, getDetailPlace, getDetailPlaceByEmail, resetDetails } from "../../Redux/actions";

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

    .comentar {
        background: rgba(229, 229, 229, 0.5);
        width: 100%;
        height: 150px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        padding: 2%;
        box-sizing: border-box;
        input {
          width: 95%;
          height: 80%;
          background-color: transparent;
          border: none;
          color: ${Colors.Platinum};
          font-family: "RocknRoll One";
          font-size: 16px;
        }
        input::placeholder {
          color: ${Colors.Platinum};
        }

        .RateComentCont {
          display: flex;
          justify-content: space-between;

          .RateCont {
            /* display: flex; */

            .rate {
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

          button {
            width: 30%;
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

/* const user = getUserInfo();
console.log(user); */
const musicBand = useSelector((state) => state.detail_music_band);
const user = getUserInfo();
const [render, setRender] = useState(false);
//const [render2, setRender2] = useState(false);
const [input, setInput] = useState({
  comment: "",
  rating: 0,
});
/* useEffect(() => {
  dispatch(getDetailMusicBandByEmail(user.email));
}, [render2]); */

console.log(musicBand);
const handleSubmit = async (e) => {
  e.preventDefault();
  if (input.comment === "" && input.rating === 0) alert("No puede realizar un comentario vacío");
  //else if (Object.keys(errors).length) alert("Check for errors and try again");
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
      /* headers: {
        Authorization: localStorage.getItem("user-token"),
      }, */
    });
    setInput({
      comment: "",
      rating: 0,
    });
    setRender(!render);
  }
};

const handleChange = (e) => {
  setInput({ ...input, comment: e.target.value });
  /* setErrors(
    validate({
      ...input,
      comment: e.target.value,
    }),
  ); */
};

const handleClick = (e) => {
  setInput({ ...input, rating: e.target.value });
  /* setErrors(
    validate({
      ...input,
      rating: e.target.value,
    }),
  ); */
};

function ReseñasOpinion({ musicBand, Opinion }) {
  return (
    <ReseñasStyleCont>
      <h1 className="TitleB">Reseñas</h1>
      <div className="comentarios">
        {Opinion ? (
          <form className="comentar" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="Ingresa tu comentario"
              className="input"
              value={input.comment}
              onChange={(e) => handleChange(e)}
            />
            <div className="RateComentCont">
              <div className="RateCont">
                <span className="rate">Puntaje: {input.rating !== 0 ? input.rating : ""}</span>
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
              <button type="submit">Comentar</button>
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
