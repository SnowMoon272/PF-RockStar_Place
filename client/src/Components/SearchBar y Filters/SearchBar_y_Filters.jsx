/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";

const SearchBarYFiltersStyled = styled.div``;

export default function SearchBarYFilters(props) {
  return (
    <SearchBarYFiltersStyled>
      {props.Search && (
        <>
          <input /> <button type="submit">Search</button>
        </>
      )}
    </SearchBarYFiltersStyled>
  );
}
