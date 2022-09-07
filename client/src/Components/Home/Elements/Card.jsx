/* eslint-disable no-cond-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
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
    /* border: solid #ff0000 3px; */

    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
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

  & .spancito {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  & .buttonCont {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .buttonCont2 {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .buttonToastAcept {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #adc178;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #64923c;
      color: ${Colors.Platinum};
      transition: 0.3s;
    }
  }
  & .buttonToastCancel {
    font-family: "RocknRoll One", sans-serif;
    color: ${Colors.Erie_Black};
    text-align: center;
    margin: 8px 0px;
    width: 45%;
    height: 35px;
    background-color: #ff9b85;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: #ee6055;
      color: ${Colors.Platinum};
      transition: 0.3s;
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

const Blocker = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 40%;
  position: absolute;
  z-index: ${({ block }) => (block ? 2100 : 0)};
`;

function Card(props) {
  const [eye, seteye] = useState(false);
  const [notfSwitch, setnotfSwitch] = useState(false);
  const [userType, setuserType] = useState("");
  const [zIndex, setzIndex] = useState(true);
  const [block, setBlock] = useState(false);

  const { info } = props;
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = getUserInfo();

  useEffect(() => {
    toast.remove();
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
    /* Algo va pasar */
    e.preventDefault();
    setBlock(true);
    toast.remove();
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
                toast.promise(axios.post(`/${user.role}s/notifications/deleteOne`, {
                  email: user.email,
                  id: info._id,
                }), {
                  loading: "Eliminando...",
                  success: () => {
                    toast.success("Notificacion eliminada");
                    dispatch(getNotifications(user.role, user.email));
                    setBlock(false);
                  },
                  error: "error",
                }, {
                  success: {
                    style: {
                      display: "none",
                    },
                  },
                });
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

  console.log(userType);

  const handlerClickNameCard = (e) => {
    e.preventDefault();
    if (userType === "local") {
      dispatch(getDetailPlaceByEmail(info.from));
      dispatch(adminClickLocal(userType));
      // navigate("/#UserINF");
      console.log(userType);
      console.log(info.from);
    } else if (userType === "banda") {
      dispatch(getDetailMusicBandByEmail(info.from));
      dispatch(adminClickBanda(userType));
      // navigate("/#UserINF");
      console.log(userType);
      console.log(info.from);
    }
    props.setnotificacion(false);
  };

  return (
    <CardStyleCont eye={info.new} key={info._id} zIndex={zIndex}>
      <Blocker block={block} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
              className: "",
              style: {
                fontSize: "1.5rem",
                fontFamily: "RocknRoll One",
              },
            }}
      />
      <div className="HeaderCont">
        <a href="#UserINF">
          <button type="button" onClick={(e) => handlerClickNameCard(e)} className="SesionContainer">
            <img src={SVGUser} alt="User" />
            <h6>{info.from}</h6>
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
