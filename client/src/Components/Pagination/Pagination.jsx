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
  }
`;

function Pagination({ cardPerPage, allCards, paginado, pageNumber }) {
  const pageNumbers = [];
  //console.log(pageNumbers) //cantidad de paginas

  //math.ceil -> redondea
  for (let i = 1; i <= Math.ceil(allCards / cardPerPage); i++) {
    pageNumbers.push(i);
  };

  function nextPage() {
    if (pageNumber < pageNumbers.length) paginado(pageNumber + 1);
  };

  function prevPage() {
    if (pageNumber > 1) paginado(pageNumber - 1);
  };

  return (
    <PaginateStyleCont>
      <ul>
        { pageNumbers && pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" className="BTNPaginate" onClick={() => prevPage}>Anterior</button>
            <button type="button" className="BTNPaginate" onClick={() => paginado(number)}>{number}</button>
            <button type="button" className="BTNPaginate" onClick={() => nextPage}>Siguiente</button>
          </li>
        ))}
      </ul>
    </PaginateStyleCont>
  );
};

export default Pagination;
