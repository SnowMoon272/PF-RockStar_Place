import React from "react";
import styled from "styled-components";

const PaginateStyleCont = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  align-content: stretch;

  ul {
    display: flex;
    flex-direction: row;
    margin: 10px
  }

  li {
    list-style:none;
    margin: 10px;
    width: 40px;
  }

  .BTNPaginate {
    box-sizing: border-box;

/*     position: absolute;
    width: 75px;
    height: 45px;
    left: 1155px;
    top: 516px; */

    background: #A2C4C3;
    border: 1px solid #18191A;
    border-radius: 10px;
    cursor: pointer;
  }
`;

function Pagination({ cardsPerPage, allPlaces, paginado, pageNumber }) {
  const pageNumbers = [];
  //console.log(pageNumbers) //cantidad de paginas

  //math.ceil -> redondea
  for (let i = 1; i <= Math.ceil(allPlaces / cardsPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <PaginateStyleCont>
      <ul>
        <button type="button" className="BTNPaginate" onClick={() => paginado(pageNumber === 1 ? pageNumber : pageNumber - 1)}>«</button>
        { pageNumbers && pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" className="BTNPaginate" onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
        <button type="button" className="BTNPaginate" onClick={() => paginado(pageNumber === pageNumbers.length ? pageNumbers.length : pageNumber + 1)}>»</button>
      </ul>
    </PaginateStyleCont>
  );
};

export default Pagination;
