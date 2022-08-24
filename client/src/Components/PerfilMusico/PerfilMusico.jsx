import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getDetailMusicBand } from "../../Redux/actions";
import BGPerfil from "../../Assets/img/hostile-gae60db101_1920.jpg";
import ImgRollingStones from "../../Assets/img/ROLLING STONES.jpg";
import ImgLogo from "../../Assets/img/logo3.png";

const ContAll = styled.div`
  margin-left: 80px;
  width: 100%;
  height: 100vh;
  background-image: url(${BGPerfil});

  .divGral {
    display: flex;
    flex-direction: row;
  }

  .divDatos {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(20, 33, 61, 0.75);
    width: 70vh;
    height: 90vh;
    margin: 25px 25px 25px 25px;
  }

  .Name {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 79px;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    margin: 2px 2px 2px 2px;
  }

  #imgRollingStones {
    width: 350px;
  }

  .divsDescripcion {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .divContenedorDescripcion {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .Azules {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #4285f4;
    margin-right: 5px;
  }

  .Blancos {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 0px 0px 10px 0px;
    color: white;
  }

  .divImgLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    margin: 25px 25px 25px 25px;
  }

  #imgLogo {
    width: 300px;
  }

  .divResenas {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    background-color: rgba(20, 33, 61, 0.75);
  }

  .divImgyResenas {
    width: 120vh;
  }
  .coment {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: ${Colors.Platinum};
    margin: 4% 0%;
    padding: 0% 3%;
    .NameRating {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .comentarios {
    border: red solid;
    background: rgba(229, 229, 229, 0.5);
    width: 100%;
    margin-top: 3%;
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
    comment: "Muy profesionales",
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

export default function PerfilMusico() {
  const dispatch = useDispatch();
  const params = useParams();
  const musicBand = useSelector((state) => state.detail_music_band);

  useEffect(() => {
    dispatch(getDetailMusicBand(params.id));
  }, [dispatch]);

  return (
    <ContAll>
      <NavBar Home Eventos />
      <div className="divGral">
        <div className="divDatos">
          <h1 className="Name">{musicBand.name}</h1>
          <img id="imgRollingStones" src={ImgRollingStones} alt="" />
          <div className="divContenedorDescripcion">
            <div className="divsDescripcion">
              <h2 className="Azules">Persona a Cargo:</h2>
              <h3 className="Blancos">{musicBand.personInCharge}</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Email:</h2>
              <h3 className="Blancos">{musicBand.email}</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Telefono:</h2>
              <h3 className="Blancos">+54 911 6666-6666</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Descripción:</h2>
              <h3 className="Blancos">Acá va la descripcion de la banda/solista</h3>
            </div>
            <div className="divsDescripcion">
              <h2 className="Azules">Rating:</h2>
              <h3 className="Blancos">{musicBand.rating}</h3>
            </div>
          </div>
        </div>
        <div className="divImgyResenas">
          <div className="divImgLogo">
            <img id="imgLogo" src={ImgLogo} alt="" />
          </div>
          <div className="divResenas">
            <h1 className="Name">Reseñas</h1>
            <div className="comentarios">
              {reviews &&
                reviews.map((review) => {
                  return (
                    <div key={review._id} className="coment">
                      <div className="NameRating">
                        <span className="autor">{review.author}</span>
                        <span className="ratingcoment">Rating: {review.rating}</span>
                      </div>
                      <p className="contenidocoment">{review.comment}</p>
                      <hr />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </ContAll>
  );
}
