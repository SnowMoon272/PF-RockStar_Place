import React from "react";
import styled from "styled-components";
import BGHome from "../../Assets/img/HomeConcert.jpg";
import BGBtn from "../../Assets/img/Metal.jpg";
import SVGDown from "../../Assets/svg/Down.svg";
import NavBar from "../NavBar/NavBar";

const HomeStyleCont = styled.div`
  /* border: 3px solid #ff0000; */
  box-sizing: border-box;
  background-color: #18191a;
  width: 100%;
  /* height: fit-content; */
  height: 3000px;
`;

const FirtVewStyleCont = styled.section`
  box-sizing: border-box;
  width: auto;
  height: 100vh;

  .ImgTitleContainer {
    box-sizing: border-box;
    width: auto;
    height: 100vh;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .h1 {
      animation-name: Rock;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      @keyframes Rock {
        0% {
          color: #e5e5e5;
          transform: scale(1);
        }
        50% {
          color: rgba(4, 19, 24, 0);
          transform: scale(1.09);
        }
        100% {
          color: #e5e5e5;
          transform: scale(1);
        }
      }
    }

    h1 {
      position: absolute;
      font-family: "New Rocker", cursive;
      margin: 0px;
      color: #e5e5e5;
      font-size: 9.6rem;
      filter: blur(1.8px);
      left: 270px;
      top: 780px;
    }
  }

  .ButonsContainer {
    box-sizing: border-box;
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 84%;
    left: 1410px;
    top: 80px;

    button {
      padding: 0px;
      background-image: url(${BGBtn});
      background-size: cover;
      border-radius: 17px;
      width: 360px;
      height: 226px;
      box-shadow: 5px 5px 500px 25px rgba(0, 0, 0, 0.45);

      :hover {
        box-shadow: none;
        cursor: pointer;
        transition: all 1.5s ease;
        transform: scale(1.1);
      }

      .FondoVerde {
        font-family: "New Rocker", cursive;
        background-color: #0c564561;
        border-radius: 17px;
        width: 360px;
        height: 226px;
        font-size: 4.2rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .SVGDown {
    position: absolute;
    bottom: 60px;
    right: 14px;
    animation-name: Down;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes Down {
      0% {
        bottom: 60px;
      }
      50% {
        bottom: 10px;
      }
      100% {
        bottom: 60px;
      }
    }
    :hover {
      cursor: pointer;
    }
    img {
      width: 55px;
      height: 55px;
    }
  }
`;

function HomeUNL() {
  return (
    <HomeStyleCont>
      <NavBar />
      <FirtVewStyleCont>
        <div className="ImgTitleContainer">
          <img src={BGHome} alt="Background" />
          <h1 className="h1">Rock Star Place</h1>
        </div>
        <div className="ButonsContainer">
          <button type="button">
            <div className="FondoVerde">+1500 Bandas y Solistas</div>
          </button>
          <button type="button">
            <div className="FondoVerde">+250 Locales</div>
          </button>
          <button type="button">
            <div className="FondoVerde">¡Registrate ahora¡</div>
          </button>
        </div>
        <a href="/" className="SVGDown">
          <img src={SVGDown} alt="Down" />
        </a>
      </FirtVewStyleCont>
    </HomeStyleCont>
  );
}

export default HomeUNL;
