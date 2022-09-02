import React from "react";
import styled from "styled-components";
import Loader from "../../Assets/img/loader.gif";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";

const LoaderStyleCont = styled.div`
  box-sizing: border-box;
  background-color: #000000;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 50;
  display: inline-block;

  .Loader {
    background-image: url(${BGHome});
    opacity: 40%;
    position: relative;
    height: 100vh;
    width: 100%;
    z-index: 55;
    object-fit: cover;
  }
  img {
    display: inline-block;
    height: 80px;
    margin-left: 45%;
    margin-top: 45vh;
    position: fixed;
    animation: ease-in-out;
  }
`;

export default function LoaderComponent() {
  return (
    <LoaderStyleCont>
      <div className="Loader">
        <img src={Loader} alt="not found" />
      </div>
    </LoaderStyleCont>
  );
}
