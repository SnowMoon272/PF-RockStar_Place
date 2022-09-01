import React from "react";
import styled from "styled-components";
import BotonSuscribete from "./BotonSuscripcion";
import Colors from "../../Utils/colors";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import LoaderComponent from "../Loader/Loading";

const SuscripcionStyleCont = styled.div`
  background-image: url(${BGHome});
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const SuscripcionDetailCont = styled.div`
  box-sizing: border-box;
  background-color: rgba(20, 33, 61, 0.75);
  width: 40%;
  height: 450px;
  display: flex;
  margin: 2.5% 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;

  h2 {
    font-family: "RocknRoll One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  h1 {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: ${Colors.Platinum};
    margin-top: 3%;
    height: fit-content;
    width: fit-content;
  }
  p {
    font-family: "RocknRoll One";
    width: 50%;
    color: ${Colors.Platinum};
    font-size: 20px;
    height: fit-content;
    width: fit-content;
  }
`;

export default function suscripcion() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <SuscripcionStyleCont>
            <NavBar Home />

            <SuscripcionDetailCont>
              <h2>Registrate ahora en</h2>
              <h1>Rock Star place</h1>
              <p>
                No esperes más para acceder a los beneficios de Rock Star place. Uniendote, podrás
                empezar a ofrecer tu lugar para que los miles de músicos registrados en nuestra
                plataforma apliquen para tocar en tus fechas disponibles. Registrarte es muy fácil.
                Hace click en el boton de abajo, realizá un único pago de $500 ARS y ya podrás
                empezar tu experiencia Rock Star place.
              </p>
            </SuscripcionDetailCont>
            <BotonSuscribete />
          </SuscripcionStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
