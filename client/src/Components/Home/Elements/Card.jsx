/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Colors from "../../../Utils/colors";
import Notificar from "./Notificar";
import SVGUser from "../../../Assets/svg/Ingresar.svg";
import SVGCerrar from "../../../Assets/svg/Cerrar.svg";
import SVGEye from "../../../Assets/svg/OjoAbierto.svg";
import SVGNEye from "../../../Assets/svg/OjoCerrado.svg";
import { getUserInfo } from "../../../Utils/auth.controller";
import { getNotifications, getDetailMusicBandByEmail, adminClickLocal, adminClickBanda, getDetailPlaceByEmail } from "../../../Redux/actions";

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
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* margin: 10px; */

    & a {
      text-decoration: none;

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
    }

    h3 {
      font-weight: 400;
      font-size: 2.3rem;
      margin: 0px;
      width: fit-content;

      & a {
        color: ${Colors.Blue_Vivid};
        font-weight: 400;
      }
    }

    & .BTNsCont {
      position: relative;
      bottom: 15px;
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
    width: 100%;
    position: relative;

    & .TextContent {
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
        font-size: 1.9rem;
      }
    }

    & button {
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

  .POPContainer {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 70px;
    right: 0px;
    width: 85%;
    height: 85%;
    margin: auto;
    z-index: ${({ zIndex }) => (zIndex ? 0 : 100)};
  }
`;

function Card({ setnotificacion, info, block, setBlock }) {
  const [eye, seteye] = useState(false);
  const [notfSwitch, setnotfSwitch] = useState(false);
  const [userType, setuserType] = useState("");
  const [zIndex, setzIndex] = useState(true);

  const dispatch = useDispatch();
  const user = getUserInfo();

  useEffect(() => {
    if (info.type === "musicband") {
      setuserType("banda");
    } else if (info.type === "place") {
      setuserType("local");
    }
  }, []);

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
    e.preventDefault();
    toast.remove();
    setBlock(true);
    toast(
      (t) => (
        <span className="spancito">
          <b>¿Estás seguro que quieres eliminar la notificacion?</b>
          <div className="buttonCont">
            <button
              type="button"
              className="buttonToastAcept"
              onClick={async () => {
                toast.dismiss(t.id);
                toast.promise(
                  axios.post(`/${user.role}s/notifications/deleteOne`, {
                    email: user.email,
                    id: info._id,
                  }),
                  {
                    loading: "Eliminando...",
                    success: () => {
                      dispatch(getNotifications(user.role, user.email));
                      setBlock(false);
                      toast.success("Notificacion eliminada");
                    },
                    error: "error",
                  },
                  {
                    success: {
                      style: {
                        display: "none",
                      },
                    },
                  },
                );
              }}
            >
              Sí, estoy seguro
            </button>
            <button
              type="button"
              className="buttonToastCancel"
              onClick={() => {
                toast.dismiss(t.id);
                setBlock(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </span>
      ),
      {
        duration: Infinity,
      },
    );
  };

  const handlerClickNameCard = (e) => {
    e.preventDefault();
    if (userType === "local") {
      dispatch(getDetailPlaceByEmail(info.from));
      dispatch(adminClickLocal(userType));
    } else if (userType === "banda") {
      dispatch(getDetailMusicBandByEmail(info.from));
      dispatch(adminClickBanda(userType));
    }
    setnotificacion(false);
  };

  return (
    <CardStyleCont eye={info.new} key={info._id} zIndex={zIndex}>
      <div className="HeaderCont">
        <a href="#UserINF">
          <button type="button" onClick={(e) => handlerClickNameCard(e)} className="SesionContainer">
            <img src={SVGUser} alt="User" />
            <h6>{info.from}</h6>
          </button>
        </a>
        <h3 className={info.type}>{info.title}</h3>
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
