/* eslint-disable react/jsx-curly-newline */
import React from "react";
import styled from "styled-components";

const PaginateStyleCont = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 20px;

  .BTNextPreb {
    line-height: 45px;
  }

  .BTNPaginate {
    font-family: "RocknRoll One";
    box-sizing: border-box;
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #18191a;
    background: #a2c4c3;
    border-radius: 10px;
    margin: 0px 3.5px;
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .Pg_selected {
    /* transition: all 0.5s ease; */
    transform: scale(1.7);
  }
`;

function Pagination({ cardsPerPage, allPlaces, paginado, pageNumber }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPlaces / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginateStyleCont>
      <button
        type="button"
        className="BTNPaginate BTNextPreb"
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
        className="BTNPaginate BTNextPreb"
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
