/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import Colors from "../../../Utils/colors";

const SearchBarYFiltersStyled = styled.div`
  display: flex;
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
  return (
    <SearchBarYFiltersStyled>
      {props.Search && (
        <>
          <div className="ContainerTitle">
            <h4>Busqueda por Local</h4>
          </div>
          <div className="ContainerSearch">
            <input type="text" placeholder="Rock Store" />
            <button type="submit">Search</button>
          </div>
        </>
      )}
    </SearchBarYFiltersStyled>
  );
}
