import React from "react";
import styled from "styled-components";
import BotonSuscribete from "./BotonSuscripcion";
import NavBar from "../NavBar/NavBar";
import BGHome from "../../Assets/img/hostile-gae60db101_1920.jpg";
import hombrePerdido from "../../Assets/img/hombreperdido.png";
import LoaderComponent from "../Loader/Loading";

const SuscripcionStyleCont = styled.div`
  background-image: url(${BGHome});
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuscripcionDetailCont = styled.div`
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
    margin-left: 23%;
  }
  .btnCont {
    margin-top: -9%;
  }
`;

export default function suscripcionError() {
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
              <img src={hombrePerdido} alt="img not found" />
            </SuscripcionDetailCont>
            <div className="btnCont">
              <BotonSuscribete />
            </div>
          </SuscripcionStyleCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
