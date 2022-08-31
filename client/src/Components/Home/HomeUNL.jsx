/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable comma-dangle */

/* React stuff */
import React, { useEffect, useState } from "react";

/* Modules */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Components & Actions */
import { getPlaces, updateFilters, popularitySort } from "../../Redux/actions";
import Pagination from "../Pagination/Pagination";
import CardsPlaces from "../Cards/CardsPlaces";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";

/* Form Img & SVG */
import BGHome from "../../Assets/img/HomeConcert.jpg";
import BGBtn from "../../Assets/img/Metal.jpg";
import Logo from "../../Assets/img/LogoCircular.png";
import SVGDown from "../../Assets/svg/Down.svg";

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
  margin-bottom: 100px;
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
    width: 900px;
    height: fit-content;
    margin-bottom: 20px;
  }

  .BotonesExtra {
    position: absolute;
    z-index: 10;
    top: 445px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-family: "RocknRoll One", sans-serif;
      width: 190px;
      height: 55px;
      padding: 0px 15px;
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

    .Filtros {
      text-align: center;
      /* border-bottom: solid 3px ${Colors.Platinum}; */
      h6 {
        margin: 0px;
        color: ${Colors.Platinum};
        font-size: 3rem;
      }

      .FiltrosData {
        display: flex;
        justify-content: space-between;

        p {
          margin: 0px 15px;
          color: ${Colors.Platinum};
          font-size: 1.5rem;
        }
      }
    }

    .SwitchCont {
      display: flex;
      align-items: center;

      label {
        display: inline-block;
        width: 65px;
        height: 33px;
        background-color: ${Colors.Platinum};
        border-radius: 100px;
        position: relative;
        transition: 0.2s;
        margin: 0px 10px 0px 0px;
        cursor: pointer;
        ::after {
          content: "";
          display: block;
          width: 25px;
          height: 25px;
          background-color: ${Colors.Green_Nigth};
          border-radius: 100px;
          position: absolute;
          top: 4px;
          left: 4px;
          transition: 0.2s;
        }
      }

      #switch:checked + label::after {
        left: 36px;
      }

      #switch:checked + label {
        background-color: ${Colors.Green_Light};
      }

      #switch {
        display: none;
      }

      .title {
        font-family: "RocknRoll One", sans-serif;
        font-size: 20px;
        color: ${Colors.Platinum};
      }
    }
  }
  .ContainerCards {
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    width: 100%;
    margin: 50px;
    padding: 0px 50px;

    .NotFound {
      margin-top: 50px;
      color: ${Colors.Platinum};
      font-size: 4rem;
      text-align: center;
    }
  }
`;

function HomeUNL() {
  const dispatch = useDispatch();
  let allPlaces = useSelector((state) => state.places);

  allPlaces = allPlaces.filter((place) => {
    return place.name !== "";
  });

  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  const [reRender, setreRender] = useState(false);

  // Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage] = useState(10);
  const ultimaCard = pageNumber * cardsPerPage;
  const primeraCard = ultimaCard - cardsPerPage;
  const currentCards = allPlaces.slice(primeraCard, ultimaCard);
  const paginado = (num) => {
    setPageNumber(num);
  };

  const [filter, setFilter] = useState({
    FilterCities: "",
    FilterSounds: "",
    FilterEvents: "",
  });

  const handlerClickReset = () => {
    dispatch(getPlaces());
    dispatch(
      updateFilters({
        Ciudad: false,
        Sonido: false,
        Evento: false,
      }),
    );
    setFilter({
      FilterCities: "",
      FilterSounds: "",
      FilterEvents: "",
    });
    paginado(1);
  };

  const handleClickSort = () => {
    dispatch(popularitySort(allPlaces));
    paginado(1);
    setreRender(!reRender);
  };

  return (
    <HomeStyleCont>
      {/* <NavBar LogIn Buscar FiltroA FiltroB Home Eventos Perfil FondoImg />  */}
      <NavBar
        LogIn
        Buscar
        FiltroA
        FiltroB
        FiltroC
        FondoImg
        paginado={paginado}
        setFilter={setFilter}
        filter={filter}
      />
      <FirtVewStyleCont>
        <div className="ImgTitleContainer">
          <img src={BGHome} alt="Background" />
          <h1 className="h1">Rock Star Place</h1>
        </div>
        <div className="ButonsContainer">
          <a href="#SecondVewStyleCont" className="Link">
            <div className="FondoVerde">+1500 Bandas y Solistas</div>
          </a>
          <a href="#SecondVewStyleCont" className="Link">
            <div className="FondoVerde">+250 Locales</div>
          </a>
          <Link to="/registro" className="Link">
            <div className="FondoVerde">¡Registrate ahora!</div>
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
          <h4 id="Ancla_Titulo">Conoce Nuestros Locales</h4>
          <div className="Paginado">
            <Pagination
              cardsPerPage={cardsPerPage}
              allPlaces={allPlaces.length}
              paginado={paginado}
              pageNumber={pageNumber}
            />
          </div>
          <div className="BotonesExtra">
            <button
              onClick={(e) => {
                handlerClickReset(e);
              }}
              type="button"
            >
              Resetear Filtros
            </button>
            <div className="Filtros">
              {/* <h6>Filtros</h6> */}
              <div className="FiltrosData">
                <p>Filtro Ciudad: {filters.Ciudad ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                <p>Filtro Sonido: {filters.Sonido ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                <p>Filtro Evento: {filters.Evento ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
              </div>
            </div>
            <button type="button" onClick={(e) => handleClickSort(e)}>
              ⭐Populares⭐
            </button>
          </div>
          <div className="ContainerCards">
            {currentCards.length ? (
              <CardsPlaces currentPlaces={currentCards} />
            ) : (
              <div className="NotFound"> ¡No se encontraron resultados! </div>
            )}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            allPlaces={allPlaces.length}
            paginado={paginado}
            pageNumber={pageNumber}
          />
        </CarsStyleCont>
      </SecondVewStyleCont>
    </HomeStyleCont>
  );
}

export default HomeUNL;
