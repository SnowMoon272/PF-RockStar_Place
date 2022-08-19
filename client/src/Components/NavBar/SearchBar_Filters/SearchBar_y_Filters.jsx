/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../../Utils/colors";
import { getCities } from "../../../Redux/actions";

const SearchBarYFiltersStyled = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  border: solid black 3px;
  background-color: ${Colors.Green_Light};
  height: fit-content;
  width: 350px;
`;

export default function SearchBarYFilters(props) {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <SearchBarYFiltersStyled>
      {props.Search && (
        <>
          <div>
            <h4>Busqueda por Local</h4>
          </div>
          <input type="text" placeholder="Rock Store" /> <button type="submit">Search</button>
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
