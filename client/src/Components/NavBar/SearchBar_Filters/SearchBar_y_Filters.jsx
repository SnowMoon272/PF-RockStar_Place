/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import Colors from "../../../Utils/colors";

const SearchBarYFiltersStyled = styled.div`
  display: none;
  position: absolute;
  z-index: 100;
  border: solid black 3px;
  background-color: ${Colors.Green_Light};
  height: fit-content;
  width: 350px;
`;

export default function SearchBarYFilters(props) {
  return (
    <SearchBarYFiltersStyled>
      {props.Search && (
        <>
          <input /> <button type="submit">Search</button>
        </>
      )}
      <p>cambio</p>
    </SearchBarYFiltersStyled>
  );
}
