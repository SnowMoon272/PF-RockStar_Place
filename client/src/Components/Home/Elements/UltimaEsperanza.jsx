/* eslint-disable react/function-component-definition */
import React from "react";
import axios from "axios";

const UltimaEsperanza = () => {
  const handlerCleckToken = async () => {
    const token = await axios.get("https://pf-rock-star-place.herokuapp.com/auth/cookie-info");
    console.log(token);
  };

  return (
    <>
      <h1>UltimaEsperanza</h1>
      <button
        type="button"
        onClick={(e) => {
          handlerCleckToken(e);
        }}
      >
        Token
      </button>
    </>
  );
};

export default UltimaEsperanza;
