/* eslint-disable no-confusing-arrow */
/* React stuff */
import React, { useEffect, useState } from "react";

/* Modules */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Components & Actions */
import Pagination from "../Pagination/Pagination";
import CardsPlaces from "../Cards/CardsPlaces";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import { getPlaces, updateFilters, popularitySort } from "../../Redux/actions";

/* Form Img & SVG */
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import IMGLogoA from "../../Assets/img/logo3.png";
import IMGBand from "../../Assets/img/ROLLING STONES.jpg";
import IMGLocal from "../../Assets/img/upload_7xCMVkX.png";
import Logo from "../../Assets/img/LogoCircular.png";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */
const HomeStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: fit-content;
  position: absolute;
`;

const FirtVewStyleCont = styled.div`
  position: relative;
  z-index: 25;
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: fit-content;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ImgContainer {
    position: fixed;
    z-index: 24;
    box-sizing: border-box;
    width: auto;
    height: 100vh;
    width: 100%;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .Heder {
    box-sizing: border-box;
    position: relative;
    z-index: 27;
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px 385px 20px 100px;

    .Logo {
      width: 350px;
      height: 150px;
    }

    .Title {
      font-family: "New Rocker", cursive;
      margin: 0px;
      color: ${Colors.Platinum};
      font-size: 8rem;
    }
    .Notificacion {
      background-color: transparent;
      border: none;
    }
  }

  .CardUnicaCont {
    background-color: ${Colors.Oxford_Blue_transparent};
    position: relative;
    z-index: 27;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    color: ${Colors.Platinum};

    & .ImgBanda {
      width: fit-content;

      & img {
        border-radius: 15px;
        width: 420px;
        height: 300px;
        margin: 40px;
      }
    }

    & .ProximoInfCont {
      display: flex;
      border-left: solid white 3px;
      width: 65%;
      height: 300px;

      & .ProximoInf {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 35px 0px 15px;

        & h4 {
          font-family: "New Rocker", cursive;
          font-size: 3.5rem;
          letter-spacing: 4px;
          margin: 0px;
        }

        & p {
          margin-top: 20px;
          font-size: 1.6rem;
          line-height: 27px;
          max-width: 420px;

          & span {
            color: ${Colors.Blue_Vivid};
            font-size: 2.4rem;
          }
        }
      }

      & .ProximoIMGyBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        & img {
          border-radius: 15px;
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        & .Lynk_Btn {
          button {
            font-family: "New Rocker", cursive;
            border: none;
            color: ${Colors.Platinum};
            border-radius: 8px;
            width: 160px;
            height: 45px;
            font-size: 2.4rem;
            background-color: ${Colors.Blue_life};
            letter-spacing: 1.5px;
            margin-top: 25px;
          }
        }
      }
    }
  }
`;

const SecondVewStyleCont = styled.section`
  box-sizing: border-box;
  position: relative;
  z-index: 27;
  margin-left: 75px;
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
    justify-content: end;
  }

  img {
    width: 230px;
    height: 230px;
  }
`;

const CarsStyleCont = styled.section`
  width: 75%;
  height: fit-content;
  margin-bottom: 100px;
  background-color: ${Colors.Oxford_Blue_transparent};
  margin-top: 160px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 30px;
    color: ${Colors.Platinum};
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
      background-color: ${Colors.Blue_life};
      color: ${Colors.Platinum};
      border-radius: 10px;
      border: none;
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

const FooterStyle = styled.section`
  box-sizing: border-box;
  position: relative;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 80px;
  z-index: 27;
  color: white;
  padding-left: 75px;
`;

/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
function HomeBL() {
  const dispatch = useDispatch();
  const allPlaces = useSelector((state) => state.places);
  const filters = useSelector((state) => state.filters);

  /* * * * * * * * * * * React Hooks  * * * * * * * * * * */
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
  });

  /* * * * * * * * * * * Handle´s * * * * * * * * * * */
  const handlerClickReset = () => {
    dispatch(getPlaces());
    dispatch(
      updateFilters({
        Ciudad: false,
        Sonido: false,
      }),
    );
    setFilter({
      FilterCities: "",
      FilterSounds: "",
    });
    paginado(1);
  };

  const handleClickSort = () => {
    dispatch(popularitySort(allPlaces));
    paginado(1);
    setreRender(!reRender);
  };

  /* * * * * * * * * * * React JSX * * * * * * * * * * */
  return (
    <HomeStyleCont>
      <NavBar
        Buscar
        FiltroA
        FiltroB
        Eventos
        Perfil
        HelpLog
        UserLog
        paginado={paginado}
        setFilter={setFilter}
        filter={filter}
      />

      <FirtVewStyleCont>
        <div className="ImgContainer">
          <img src={BGHome} alt="Background" />
        </div>
        <div className="Heder">
          <img className="Logo" src={IMGLogoA} alt="" />
          <h1 className="Title">Nombre de la banda</h1>
          <button type="button" className="Notificacion">
            <img src="" alt="" />
          </button>
        </div>
        <div className="CardUnicaCont">
          <div className="ImgBanda">
            <img src={IMGBand} alt="Banda" />
          </div>
          <div className="ProximoInfCont">
            <div className="ProximoInf">
              <h4>Proximo Evento</h4>
              <p>
                <span>Local: </span>Bar las Americas <br />
                <span>Fecha: </span>Sabado 27 de Marzo. <br />
                <span>Contacto: </span>Rafael Gomez Plata <br />
                <span>Telefono: </span> (+52) 55 6192 2596 <br />
                <span>Direccion: </span> Av. Siempre Viva #54 interior 12 Colonia Las Americas
              </p>
            </div>
            <div className="ProximoIMGyBtn">
              <img src={IMGLocal} alt="Local" />
              <Link className="Lynk_Btn" to="/home/band">
                <button type="button">Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      </FirtVewStyleCont>
      <SecondVewStyleCont UserLog id="SecondVewStyleCont">
        <div className="ContenidoPrevio">
          <img src={Logo} alt="Logo" />
        </div>
        <CarsStyleCont>
          <h4 id="Ancla_Titulo">Conoce Nuestros Locales</h4>
          <div className="Paginado">
            <Pagination
              UserLog
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
              <div className="FiltrosData">
                <p>Filtro Ciudad: {filters.Ciudad ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
                <p>Filtro Sonido: {filters.Sonido ? "Aplicado ✔️" : "No Aplicado ❌"} </p>
              </div>
            </div>
            <button type="button" onClick={(e) => handleClickSort(e)}>
              ⭐ Populares ⭐
            </button>
          </div>
          <div className="ContainerCards">
            {currentCards.length ? (
              <CardsPlaces UserLog currentPlaces={currentCards} />
            ) : (
              <div className="NotFound"> ¡No se encontraron resultados! </div>
            )}
          </div>
          <Pagination
            UserLog
            cardsPerPage={cardsPerPage}
            allPlaces={allPlaces.length}
            paginado={paginado}
            pageNumber={pageNumber}
          />
        </CarsStyleCont>
      </SecondVewStyleCont>
      <FooterStyle>
        Fotter
        asdlfjkhgasdkjfughkaduisfhgiluadhfligushjdofiughjoadipufghjlsikdufjvblskdfjgpiijfghoiusjfñboisjdlfbkjsrñftogbjslfifdjnmg
        sdlifdjgsld iolsidfurtdhjg isufdfhopiu sdlfiu ghsldi uh
      </FooterStyle>
    </HomeStyleCont>
  );
}

export default HomeBL;