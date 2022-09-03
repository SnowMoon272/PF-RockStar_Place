/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Elements/Card";
import Graficas from "./Elements/Graficas";
import UsersInf from "./Elements/UsersInf";
import Colors from "../../Utils/colors";
import BGHome from "../../Assets/img/blackAndWhite.jpg";
import SVGNoti from "../../Assets/svg/Notificacion.svg";
import SVGUser from "../../Assets/svg/Ingresar.svg";
import IMGUp from "../../Assets/img/flecha-hacia-arriba.png";
import { getNotifications, removeNotifications } from "../../Redux/actions";
import { getUserInfo } from "../../Utils/auth.controller";

const HomeStyleCont = styled.div`
  /* border: solid #ff0000 3px; */

  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  /* height: fit-content; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  color: ${Colors.Platinum};

  & .ImgContainer {
    /* border: solid #002fff 3px; */

    box-sizing: border-box;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100vh;

    & img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .Up {
      position: fixed;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 20px;
      right: 25px;
      z-index: 25;
      width: 40px;
      height: 40px;

      animation-name: Up;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      @keyframes Up {
        0% {
          bottom: 30px;
        }
        50% {
          bottom: 10px;
        }
        100% {
          bottom: 30px;
        }
      }
      :hover {
        cursor: pointer;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  & .Header {
    /* border: solid #00ffe5 3px; */

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    position: relative;
    z-index: 20;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 20px;

    & .NotioficationContLogo {
      /* border: solid #ff00fb 3px; */

      width: 100px;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      & button {
        border-radius: 100%;
        background-color: ${Colors.Blue_life};

        border: none;
        cursor: pointer;
        position: relative;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;

        :hover {
          transform: scale(1.2);
          cursor: pointer;
        }

        & .ImgCapana {
          width: 30px;
        }

        & .FondoNumero {
          position: absolute;
          border-radius: 100%;
          background-color: #ff0000;
          top: 5px;
          right: 7px;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          & p {
            color: ${Colors.Platinum};
            font-size: 1.5rem;
            /* color: black; */
          }
        }
      }
    }

    & .SesionContainer {
      border: solid #ffffff 3px;
      border-radius: 50px;
      padding: 4px 8px 4px 4px;
      display: flex;
      align-items: center;
      transition: all 0.1s ease;

      & a {
        color: ${Colors.Platinum};
        text-decoration: none;
      }

      p {
        display: none;
      }

      :hover {
        background-color: ${Colors.Oxford_Blue_transparent};

        p {
          cursor: pointer;
          display: block;
          position: absolute;
          top: 61px;
          right: 105px;
          font-size: 1.5rem;
          margin: 0px;
          background-color: ${Colors.Oxford_Blue_transparent};
          padding: 4px 20px;
          border: solid #ffffff 3px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;
        }
      }

      & img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      & h6 {
        font-size: 1.5rem;
        margin: 0px;
        font-weight: 400;
      }
    }
  }

  & .TrasparentStyledCont {
    /* border: solid #11ff00 3px; */

    box-sizing: border-box;
    position: relative;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
  }
`;

const NotificacionesStyleCont = styled.section`
  /* border: solid #ff00f7 3px; */

  box-sizing: border-box;
  background-color: ${Colors.Oxford_Blue_transparent};
  width: 100%;
  height: fit-content;
  margin-bottom: 70px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    /* border: solid #ff1100 3px; */

    font-family: "New Rocker";
    text-align: center;
    margin: 0px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 6rem;
    font-weight: 400;
  }

  & .CardsContainer {
    /* border: solid #2fff00 3px; */

    box-sizing: border-box;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & .CardsContainerScroll {
      width: 100%;
      box-sizing: border-box;

      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        background: ${Colors.Oxford_Blue_transparent};
      }
      &::-webkit-scrollbar-thumb {
        background-color: #14213d;
        border-radius: 25px;
        border: 1px solid white;
      }
    }
  }
`;

const GraficStyleCont = styled.div`
  /* border: solid #7300ff 3px; */

  box-sizing: border-box;
  border-radius: 50px;
  background-color: #000000da;
  width: 100%;
  height: 600px;
`;

const UsersStyleCont = styled.div`
  /* border: solid #7300ff 3px; */

  box-sizing: border-box;
  margin-bottom: 100px;
  /* background-color: ${Colors.Oxford_Blue_transparent}; */
  width: 100%;
  height: fit-content;
  object-fit: cover;
`;

function HomeADM() {
  const [notificacion, setnotificacion] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getUserInfo();
    setUserInfo(user);
    dispatch(getNotifications(user.role, user.email));
  }, []);

  const handlerClickExit = (e) => {
    dispatch(removeNotifications());
    localStorage.removeItem("user-token");
  };

  const handlerClickNot = (e) => {
    setnotificacion(!notificacion);
  };

  const newNotifications = (array) => {
    let count = 0;
    array.forEach((notificacion) => {
      if (notificacion.new) count++;
    });
    return count;
  };

  return (
    <HomeStyleCont>
      <div className="ImgContainer">
        <img src={BGHome} alt="Background" />
        <a href="#Notification" className="Up">
          <img src={IMGUp} alt="Up" />
        </a>
      </div>
      <header id="Notification" className="Header">
        <div className="NotioficationContLogo">
          <button type="button" onClick={(e) => handlerClickNot(e)}>
            <img className="ImgCapana" src={SVGNoti} alt="Notificacion" />
            <div className="FondoNumero">
              <p>{notifications ? newNotifications(notifications) : 0}</p>
            </div>
          </button>
        </div>
        <div className="SesionContainer">
          <img src={SVGUser} alt="User" />
          <h6 type="button">
            {userInfo.email}
            <a href="/">
              <p onClick={(e) => handlerClickExit(e)}>Cerrar Sesión</p>
            </a>
          </h6>
        </div>
      </header>
      <div className="TrasparentStyledCont">
        {notificacion && (
          <NotificacionesStyleCont>
            <h2>Notificaciones</h2>
            <div className="CardsContainer">
              <div className="CardsContainerScroll">
                {notifications.map((notification) => {
                  return <Card info={notification} />;
                })}
              </div>
            </div>
          </NotificacionesStyleCont>
        )}
        <GraficStyleCont>
          <Graficas />
        </GraficStyleCont>
        <UsersStyleCont>
          <UsersInf />
        </UsersStyleCont>
      </div>
    </HomeStyleCont>
  );
}

export default HomeADM;
