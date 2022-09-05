/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Colors from "../../../Utils/colors";
import Notificar from "./Notificar";
import SVGUser from "../../../Assets/svg/Ingresar.svg";
import SVGCerrar from "../../../Assets/svg/Cerrar.svg";
import SVGEye from "../../../Assets/svg/OjoAbierto.svg";
import SVGNEye from "../../../Assets/svg/OjoCerrado.svg";
import { getUserInfo } from "../../../Utils/auth.controller";
import { getNotifications, getDetailMusicBandByEmail, adminClickLocal, adminClickBanda } from "../../../Redux/actions";

const CardStyleCont = styled.div`
  border: solid #ffffff 1px;
  background-color: ${({ eye }) => (eye ? Colors.Platinum_Transparent : Colors.Erie_Black_Transparent)};
  position: relative;
  color: ${({ eye }) => (eye ? Colors.Erie_Black_Transparent : Colors.Platinum_Transparent)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 99.4%;
  height: fit-content;
  margin-bottom: 35px;
  border-radius: 10px;
  padding: 15px;

  & .HeaderCont {
    /* border: solid #ff0000 3px; */

    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* margin: 10px; */

    & .SesionContainer {
      border: solid #ffffff 3px;
      border-radius: 50px;
      padding: 4px 8px 4px 4px;
      display: flex;
      align-items: center;
      transition: all 0.1s ease;
      color: ${({ eye }) => (eye ? Colors.Platinum_Transparent : Colors.Erie_Black_Transparent)};
      text-decoration: none;
      background-color: ${({ eye }) => (eye ? Colors.Erie_Black_Transparent : Colors.Platinum_Transparent)};
      transition: all 0.5s ease;

      :hover {
        transform: scale(1.04);
        cursor: pointer;
        background-color: ${Colors.Platinum};
        color: ${Colors.Erie_Black};
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

    & .BTNsCont {
      display: flex;
      width: 80px;
      justify-content: space-between;
      align-items: flex-start;

      & .BTNCerrar {
        background-color: ${Colors.Erie_Black};
        border: none;
        width: 29px;
        height: 29px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s ease;

        :hover {
          transform: scale(1.2);
          cursor: pointer;
        }

        img {
          width: 34px;
          height: 34px;
        }
      }

      & .Eye {
        cursor: pointer;
        width: 40px;
        height: 30px;
        background-color: ${({ eye }) => (eye ? Colors.Platinum_Transparent : Colors.Erie_Black_Transparent)};
        transition: all 0.5s ease;
        :hover {
          transform: scale(1);
        }

        img {
          width: 34px;
          height: 34px;
        }
      }
    }
  }

  & .SecondVewCont {
    /* border: solid #ff0000 3px; */
    width: 100%;
    position: relative;

    & h3 {
      /* border: solid #ff0000 3px; */

      position: relative;
      top: -42px;
      left: 350px;
      font-weight: 400;
      font-size: 2rem;
      margin: 0px;
      width: fit-content;

      & a {
        color: ${Colors.Blue_Vivid};
        font-weight: 400;
      }
    }

    & .TextContent {
      /* border: solid #ffffff 1px; */

      width: 80%;
      height: 100px;
      margin-left: 25px;

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

      & p {
        margin-right: 8px;
        font-size: 1.4rem;
      }
    }

    & button {
      /* border: solid #2fff00 3px; */
      font-family: "New Rocker", cursive;
      position: relative;
      left: 86%;
      bottom: 30px;
      background-color: ${Colors.Blue_life};
      width: 150px;
      font-size: 1.8rem;
      font-weight: 400;
      border: none;
      border-radius: 8px;
      color: ${Colors.Platinum};
      transition: all 0.5s ease;
      padding: 6px;

      :hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
`;

function Card(props) {
  const [eye, seteye] = useState(false);
  const [notfSwitch, setnotfSwitch] = useState(false);

  const { info } = props;
  const dispatch = useDispatch();
  const user = getUserInfo();

  const handlerSwitchNotif = (e) => {
    setnotfSwitch(!notfSwitch);
  };

  const handlerEye = async (e) => {
    await axios({
      method: "put",
      url: `/${user.role}s/notification/switchn`,
      data: {
        email: user.email,
        id: info._id,
      },
    });
    dispatch(getNotifications(user.role, user.email));
    e.new ? seteye(eye) : seteye(!eye);
  };
  const handlerCloseNotif = async (e) => {
    /* Algo va pasar */
    e.preventDefault();
    await axios({
      method: "post",
      url: `/${user.role}s/notifications/deleteOne`,
      data: {
        email: user.email,
        id: info._id,
      },
    });
    dispatch(getNotifications(user.role, user.email));
  };

  const handlerClickNameCard = async (e) => {
    // dispatch(getDetailMusicBandByEmail(e.target.value));
    // dispatch(adminClickBanda(e.target.name));
    // props.setnotificacion(false);
    // dispatch(adminClickLocal("local"));
    // dispatch(adminClickBanda("banda"));
  };

  return (
    <CardStyleCont eye={info.new} key={info._id}>
      <div className="HeaderCont">
        <a href="#UserINF" style={{ "text-decoration": "none" }}>
          <button type="button" name="banda" value={info.from} onClick={(e) => handlerClickNameCard(e)} className="SesionContainer">
            <img src={SVGUser} alt="User" />
            <h6 type="button">{info.from}</h6>
          </button>
        </a>
        <div className="BTNsCont">
          <button onClick={(e) => handlerEye(e)} type="button" className="BTNCerrar Eye">
            <img src={info.new ? SVGEye : SVGNEye} alt="ojo" />
          </button>
          <button onClick={(e) => handlerCloseNotif(e)} type="button" className="BTNCerrar">
            <img src={SVGCerrar} alt="cerrar" />
          </button>
        </div>
      </div>
      <div className="SecondVewCont">
        <h3 className={info.type}>
          {info.title} {/* <a href="/"> NombreUserReportado</a> */}
        </h3>
        <div className="TextContent">
          <p>{info.message}</p>
        </div>
        {user.role === "admin" ? (
          <button
            onClick={(e) => {
              handlerSwitchNotif(e);
            }}
            type="button"
          >
            Responder
          </button>
        ) : null}
      </div>
      {notfSwitch && info && <Notificar info={info} setnotfSwitch={setnotfSwitch} />}
    </CardStyleCont>
  );
}

export default Card;
