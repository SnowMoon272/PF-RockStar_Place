/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getPlacesByName } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../../Utils/colors";
import { getCities } from "../../../Redux/actions";

const SearchBarYFiltersStyled = styled.div`
  display: ${(props) => (props.Active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid black 3px;
  background-color: ${Colors.Green_Light};
  min-height: 200px;
  width: 470px;
  border-radius: 15px;

  .ContainerTitle {
    background-color: ${Colors.Green_Nigth};
    border-radius: 15px;
    margin: 25px;
    width: 90%;

    h4 {
      font-family: "New Rocker", cursive;
      color: ${Colors.Platinum};
      font-size: 4rem;
      text-align: center;
      margin: 30px;
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
      width: 130px;
      border-radius: 7px;
      transition: all 0.5s ease;
      background-color: ${Colors.Green_Nigth};
      color: ${Colors.Platinum};
      font-size: 1.8rem;
      :hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;

export default function SearchBarYFilters(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlerSubmint = (e) => {
    e.preventDefault();
    dispatch(getPlacesByName(name));
    setTitle("");
    paginado(1);
  };

  return (
    <SearchBarYFiltersStyled Active={props.Active}>
      {props.Search && (
        <>
          <div className="ContainerTitle">
            <h4>Busqueda por Local</h4>
          </div>
          <div className="ContainerSearch">
            <input
              value={name}
              onChange={(e) => handlerInputChange(e)}
              type="text"
              placeholder="Rock Store"
            />
            <button onClick={(e) => handlerSubmint(e)} type="submit">
              Search
            </button>
          </div>
        </>
      )}
      {props.FilterCities && (
        <>
          <div>
            <h4>Filtrar por Ciudad</h4>
          </div>
          <div>
            <select name="cities" defaultValue="opcion_blockeada">
              <option value="opcion_blockeada" disabled>
                Elige tu Ciudad
              </option>
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
      {props.FilterSounds && (
        <>
          <div>
            <h4>Locales con equipo de Audio</h4>
          </div>
          <div>
            <select name="audio" defaultValue="opcion_blockeada">
              <option value="opcion_blockeada" disabled>
                Elige tu opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </>
      )}
    </SearchBarYFiltersStyled>
  );
}
