/* React stuff */
import React, { useState, useEffect } from "react";

/* Modules */
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

/* Components & Actions */
import { getPlacesByName, getCities, filteredPlaces, updateFilters } from "../../../Redux/actions";

/* Form Img & SVG */
import Colors from "../../../Utils/colors";
import SVGCerrar from "../../../Assets/svg/Cerrar.svg";

/* * * * * * * * * * * Styled Components CSS  * * * * * * * * * * */
const SearchBarYFiltersStyled = styled.div`
  display: ${({ Active }) => (Active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid black 3px;
  background-color: ${({ UserLog }) => (UserLog ? Colors.Oxford_Blue : Colors.Green_Light)};
  min-height: 200px;
  width: 470px;
  border-radius: 15px;

  .ContainerTitle {
    background-color: ${({ UserLog }) => (UserLog ? Colors.Platinum : Colors.Green_Nigth)};
    border-radius: 15px;
    margin: 25px;
    width: 90%;

    h4 {
      font-family: "New Rocker", cursive;
      color: ${({ UserLog }) => (UserLog ? Colors.Erie_Black : Colors.Platinum)};
      font-size: 4rem;
      text-align: center;
      margin: 30px;
    }

    .BTNCerrar {
      position: absolute;
      top: 6px;
      right: 6px;
      background-color: ${Colors.Erie_Black};
      border: none;
      width: 29px;
      height: 29px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .ContainerSearch {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 90%;

    input {
      font-family: "New Rocker", cursive;
      border: solid black 3px;
      height: 35px;
      width: 240px;
      border-radius: 7px;
      padding-left: 15px;
      font-size: 2rem;
    }

    button {
      font-family: "RocknRoll One", sans-serif;
      width: 130px;
      border-radius: 7px;
      transition: all 0.5s ease;
      background-color: ${({ UserLog }) => (UserLog ? Colors.Platinum : Colors.Green_Nigth)};
      color: ${({ UserLog }) => (UserLog ? Colors.Erie_Black : Colors.Platinum)};
      font-size: 1.8rem;
      font-weight: bold;
      :hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  .ContainerSound {
    background-color: ${({ UserLog }) => (UserLog ? Colors.Platinum : Colors.Green_Nigth)};
    border-radius: 15px;
    margin-bottom: 25px;
    width: 90%;
  }
  .Select {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: fit-content;

    .StyleSelect {
      font-family: "RocknRoll One", sans-serif;
      background-color: ${({ UserLog }) => (UserLog ? Colors.Oxford_Blue : Colors.Green_Light)};
      color: ${({ UserLog }) => (UserLog ? Colors.Platinum : Colors.Erie_Black)};
      border-radius: 25px;
      text-align: center;
      width: 90%;
      font-size: 2rem;
      appearance: none;
      outline: none;
      cursor: pointer;

      .StyleOption {
        background-color: ${Colors.Green_Light};
      }
    }
  }
`;

/* * * * * * * * * * * React Component Function  * * * * * * * * * * */
export default function SearchBarYFilters({
  setNavState,
  navState,
  paginado,
  setFilter,
  filter,
  Active,
  Search,
  FilterCities,
  FilterSounds,
  FilterEvents,
  UserLog,
}) {
  /* * * * * * * * * * * React Hooks  * * * * * * * * * * */
  const filters = useSelector((state) => state.filters);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  /* * * * * * * * * * * Handle´s * * * * * * * * * * */

  const handlerInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlerSubmintCloseSearch = (e) => {
    e.preventDefault();
    setNavState({
      ...navState,
      Active: !navState.Active,
      Search: !navState.Search,
    });
  };

  const handlerSubmintCloseCity = (e) => {
    e.preventDefault();
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterCities: !navState.FilterCities,
    });
  };

  const handlerSubmintCloseSound = (e) => {
    e.preventDefault();
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterSounds: !navState.FilterSounds,
    });
  };

  const handlerSubmintCloseEvent = (e) => {
    e.preventDefault();
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterEvents: !navState.FilterEvents,
    });
  };

  const handlerSubmintSearch = (e) => {
    e.preventDefault();
    dispatch(getPlacesByName(name));
    setName("");
    paginado(1);
    setNavState({
      ...navState,
      Active: !navState.Active,
      Search: !navState.Search,
    });
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
  };

  const handlerSubmintFilterCity = (e) => {
    e.preventDefault();
    dispatch(filteredPlaces(e.target.value, filter.FilterSounds, filter.FilterEvents));
    setFilter({ ...filter, FilterCities: e.target.value });
    dispatch(
      updateFilters({
        ...filters,
        Ciudad: true,
      }),
    );
    paginado(1);
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterCities: !navState.FilterCities,
    });
  };

  const handlerSubmintFilterSound = (e) => {
    e.preventDefault();
    dispatch(filteredPlaces(filter.FilterCities, e.target.value, filter.FilterEvents));
    setFilter({ ...filter, FilterSounds: e.target.value });
    dispatch(
      updateFilters({
        ...filters,
        Sonido: true,
      }),
    );
    paginado(1);
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterSounds: !navState.FilterSounds,
    });
  };

  const handlerSubmintFilterEvent = (e) => {
    e.preventDefault();
    dispatch(filteredPlaces(filter.FilterCities, filter.FilterSounds, e.target.value));
    setFilter({ ...filter, FilterEvents: e.target.value });
    dispatch(
      updateFilters({
        ...filters,
        Evento: true,
      }),
    );
    paginado(1);
    setNavState({
      ...navState,
      Active: !navState.Active,
      FilterEvents: !navState.FilterEvents,
    });
  };

  /* * * * * * * * * * * React JSX * * * * * * * * * * */
  return (
    <SearchBarYFiltersStyled UserLog={UserLog} Active={Active}>
      {Search && (
        <>
          <div className="ContainerTitle">
            <h4>Busqueda por Local</h4>
            <button name="Search" onClick={(e) => handlerSubmintCloseSearch(e)} type="button" className="BTNCerrar">
              <img src={SVGCerrar} alt="" />
            </button>
          </div>
          <div className="ContainerSearch">
            <input value={name} onChange={(e) => handlerInputChange(e)} type="text" placeholder="Rock Store" />
            <button onClick={(e) => handlerSubmintSearch(e)} type="submit">
              Search
            </button>
          </div>
        </>
      )}
      {FilterCities && (
        <>
          <div className="ContainerTitle">
            <h4>Filtrar por Ciudad</h4>
            <button name="FilterCities" onClick={(e) => handlerSubmintCloseCity(e)} type="button" className="BTNCerrar">
              <img src={SVGCerrar} alt="" />
            </button>
          </div>
          <div className="ContainerSound Select">
            <select
              onChange={(e) => {
                handlerSubmintFilterCity(e);
              }}
              className="StyleSelect"
              name="cities"
            >
              <option className="StyleOption" defaultValue="opcion_blockeada" hidden label="Elige tu Ciudad" />
              {cities?.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      )}
      {FilterSounds && (
        <>
          <div className="ContainerTitle">
            <h4>Locales con equipo de Audio</h4>
            <button name="FilterSounds" onClick={(e) => handlerSubmintCloseSound(e)} type="button" className="BTNCerrar">
              <img src={SVGCerrar} alt="" />
            </button>
          </div>
          <div className="ContainerSound Select">
            <select
              onChange={(e) => {
                handlerSubmintFilterSound(e);
              }}
              className="StyleSelect"
              name="sound"
            >
              <option className="StyleOption" defaultValue="opcion_blockeada" hidden label="Elige tu opcion." />
              <option value="sonidoSi">Si</option>
              <option value="sonidoNo">No</option>
            </select>
          </div>
        </>
      )}
      {FilterEvents && (
        <>
          <div className="ContainerTitle">
            <h4>Locales con fechas disponibles</h4>
            <button name="FilterEvents" onClick={(e) => handlerSubmintCloseEvent(e)} type="button" className="BTNCerrar">
              <img src={SVGCerrar} alt="" />
            </button>
          </div>
          <div className="ContainerSound Select">
            <select
              onChange={(e) => {
                handlerSubmintFilterEvent(e);
              }}
              className="StyleSelect"
              name="event"
            >
              <option className="StyleOption" defaultValue="opcion_blockeada" hidden label="Elige tu opcion." />
              <option value="hasDates">Disponible</option>
              <option value="noDates">No Disponible</option>
            </select>
          </div>
        </>
      )}
    </SearchBarYFiltersStyled>
  );
}
