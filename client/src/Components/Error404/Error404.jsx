import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import error404 from "../../Assets/img/error404.png";
import LoaderComponent from "../Loader/Loading";
import Colors from "../../Utils/colors";

const ErrorStyleCont = styled.div`
  background-image: url(${BGHome});
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btnSuscribete {
    font-family: "RocknRoll One", sans-serif;
    width: 190px;
    height: 55px;
    padding: 0px 15px;
    background-color: ${Colors.Green_Light};
    color: ${Colors.Erie_Black};
    border-radius: 10px;
    font-size: 2.5rem;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const ErrorDetailCont = styled.div`
  box-sizing: border-box;
  width: 40%;
  height: 30%;
  background-color: rgba(20, 33, 61, 0.75);
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${BGHome};
  box-sizing: border-box;
  text-align: center;

  img {
    height: fit-content;
    height: fit-content;
  }
`;

function Error404() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <ErrorStyleCont>
            <ErrorDetailCont>
              <img src={error404} alt="img not found" />
            </ErrorDetailCont>
            <Link to="/">
              <button className="btnSuscribete" type="submit">
                Home
              </button>
            </Link>
          </ErrorStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default Error404;
