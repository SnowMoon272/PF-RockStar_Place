/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
import React from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";

const PaginateStyleCont = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 20px;

  .BTNPaginate {
    box-sizing: border-box;
    width: 41px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${({ UserLog }) => (UserLog ? Colors.Platinum : Colors.Erie_Black)};
    background-color: ${({ UserLog }) => (UserLog ? Colors.Oxford_Blue : Colors.Green_Light)};
    border: solid 1px ${Colors.Platinum};
    border-radius: 8px;
    margin: 0px 4.5px;
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  .Pg_selected {
    transform: scale(1.7);
  }
`;

function Pagination({ UserLog, cardsPerPage, allPlaces, paginado, pageNumber }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPlaces / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginateStyleCont UserLog={UserLog}>
      <button
        type="button"
        className="BTNPaginate "
        onClick={() => paginado(pageNumber === 1 ? pageNumber : pageNumber - 1)}
      >
        {"<<"}
      </button>

      {pageNumbers &&
        pageNumbers.map((number) => (
          <button
            type="button"
            className="BTNPaginate"
            onClick={() => paginado(number)}
            key={number}
          >
            {pageNumber === number ? <b className="Pg_selected">{number}</b> : number}
          </button>
        ))}

      <button
        type="button"
        className="BTNPaginate "
        onClick={() =>
          paginado(pageNumber === pageNumbers.length ? pageNumbers.length : pageNumber + 1)
        }
      >
        {">>"}
      </button>
    </PaginateStyleCont>
  );
}

export default Pagination;
