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

  .BTNPaginate {
    box-sizing: border-box;
    width: 75px;
    height: 45px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-family: 'RocknRoll One';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #18191A;
    background: #A2C4C3;
    border: 1px solid #18191A;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
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
          <button type="button" className="BTNPaginate" onClick={() => paginado(number)} key={number}>{pageNumber === number ? "*" : number}</button>
        ))}
        <button type="button" className="BTNPaginate" onClick={() => paginado(pageNumber === pageNumbers.length ? pageNumbers.length : pageNumber + 1)}>»</button>
      </ul>
    </PaginateStyleCont>
  );
};

export default Pagination;
