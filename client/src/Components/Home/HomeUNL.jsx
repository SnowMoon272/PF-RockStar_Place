import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../../Redux/actions";
import CardsPlaces from "../Cards/CardsPlaces";
import Colors from "../../Utils/colors";
import BGHome from "../../Assets/img/HomeConcert.jpg";
import BGBtn from "../../Assets/img/Metal.jpg";
import Logo from "../../Assets/img/LogoCircular.png";
import SVGDown from "../../Assets/svg/Down.svg";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: fit-content;
`;

const FirtVewStyleCont = styled.section`
  box-sizing: border-box;
  width: auto;
  height: 100vh;

  .ImgTitleContainer {
    box-sizing: border-box;
    width: auto;
    height: 100vh;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .h1 {
      animation-name: Rock;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      @keyframes Rock {
        0% {
          color: ${Colors.Platinum};
          transform: scale(1);
        }
        50% {
          color: rgba(4, 19, 24, 0);
          transform: scale(1.09);
        }
        100% {
          color: ${Colors.Platinum};
          transform: scale(1);
        }
      }
    }

    h1 {
      position: absolute;
      font-family: "New Rocker", cursive;
      margin: 0px;
      color: ${Colors.Platinum};
      font-size: 9.6rem;
      filter: blur(1.8px);
      left: 12%;
      top: 78%;
    }
  }

  .ButonsContainer {
    box-sizing: border-box;
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 84%;
    right: 5%;
    top: 10%;

    .Link {
      color: ${Colors.Erie_Black};
      text-decoration: none;
      text-align: center;
      margin: 0%;
      padding: 0px;
      background-image: url(${BGBtn});
      background-size: cover;
      background-position: center;
      border-radius: 17px;
      width: 360px;
      height: 27%;
      box-shadow: 5px 5px 500px 25px rgba(0, 0, 0, 0.45);

      :hover {
        box-shadow: none;
        cursor: pointer;
        transition: all 1.5s ease;
        transform: scale(1.1);
      }

      .FondoVerde {
        font-family: "New Rocker", cursive;
        background-color: #0c564561;
        border-radius: 17px;
        width: 100%;
        height: 100%;
        font-size: 4.2rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .SVGDown {
    position: absolute;
    bottom: 60px;
    right: 14px;
    animation-name: Down;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes Down {
      0% {
        bottom: 60px;
      }
      50% {
        bottom: 10px;
      }
      100% {
        bottom: 60px;
      }
    }
    :hover {
      cursor: pointer;
    }
    img {
      width: 55px;
      height: 55px;
    }
  }
`;

const SecondVewStyleCont = styled.section`
  position: relative;
  box-sizing: border-box;
  margin-left: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ContenidoPrevio {
    position: absolute;
    top: 42px;
    width: 86%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Link {
      font-family: "New Rocker", cursive;
      border-radius: 10px;
      background-color: ${Colors.Green_Light};
      width: 290px;
      height: 80px;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${Colors.Erie_Black};
      transition: all 0.5s ease;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    img {
      width: 230px;
      height: 230px;
    }
  }
`;

const CarsStyleCont = styled.section`
  width: 75%;
  height: fit-content;
  background-color: ${Colors.Green_Nigth};
  margin-top: 160px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 30px;
    color: ${Colors.Green_Light};
    font-family: "New Rocker", cursive;
    font-size: 7rem;
  }

  .Paginado {
    background-color: blueviolet;
    width: 900px;
    height: 100px;
  }

  .BotonesExtra {
    position: absolute;
    top: 450px;
    width: 70%;
    display: flex;
    justify-content: space-between;

    button {
      font-family: "RocknRoll One", sans-serif;
      width: 120px;
      height: 40px;
      background-color: ${Colors.Green_Light};
      color: ${Colors.Erie_Black};
      border-radius: 10px;
      font-size: 1.8rem;
      transition: all 0.5s ease;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
  .ContainerCards {
    box-sizing: border-box;
    width: 100%;
    margin: 50px;
    padding: 0px 50px;
  }
`;

function HomeUNL() {
  const dispatch = useDispatch();

  const allPlaces = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  //paginado
  //const [order, setOrder] = useState('');
  //empieza en la pag
  const [pageNumber, setPageNumer] = useState(1); //1 empieza en esa pag
  //console.log('curr:', pageNumber)

  //cuantos cards por pagina
  const [cardsPerPage] = useState(10);
  //indice para el ultimo juego
  const ultimaCard = pageNumber * cardsPerPage; //10
  const primeraCard = ultimaCard - cardsPerPage; //0
  const currentCards = allPlaces.slice(primeraCard, ultimaCard);

  const paginado = (num) => {
    setPageNumer(num);
  };

  return (
    <HomeStyleCont>
      {/* <NavBar LogIn Buscar FiltroA FiltroB Home Eventos Edit FondoImg /> Ejemplo con todo lo que puede llevar. */}
      <NavBar LogIn Buscar FiltroA FiltroB FondoImg />
      <FirtVewStyleCont>
        <div className="ImgTitleContainer">
          <img src={BGHome} alt="Background" />
          <h1 className="h1">Rock Star Place</h1>
        </div>
        <div className="ButonsContainer">
          <Link to="/" className="Link">
            <div className="FondoVerde">+1500 Bandas y Solistas</div>
          </Link>
          <Link to="/" className="Link">
            <div className="FondoVerde">+250 Locales</div>
          </Link>
          <Link to="/" className="Link">
            <div className="FondoVerde">¡Registrate ahora¡</div>
          </Link>
        </div>
        <a href="#SecondVewStyleCont" className="SVGDown">
          <img src={SVGDown} alt="Down" />
        </a>
      </FirtVewStyleCont>

      <SecondVewStyleCont id="SecondVewStyleCont">
        <div className="ContenidoPrevio">
          <button type="button" className="Link">
            Proximo Evento
          </button>
          <img src={Logo} alt="Logo" />
        </div>
        <CarsStyleCont>
          <h4>Conoce Nuestros Locales</h4>
          <Pagination cardsPerPage={cardsPerPage} allPlaces={allPlaces.length} paginado={paginado} pageNumber={pageNumber} />
          <div className="BotonesExtra">
            <button type="button">Recargar</button>
            <button type="button">Rating</button>
          </div>
          <div className="ContainerCards">
            <CardsPlaces currentPlaces={currentCards} />
          </div>
          <Pagination cardsPerPage={cardsPerPage} allPlaces={allPlaces.length} paginado={paginado} pageNumber={pageNumber} />
        </CarsStyleCont>
      </SecondVewStyleCont>
    </HomeStyleCont>
  );
}

export default HomeUNL;
