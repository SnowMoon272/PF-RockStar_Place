import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import Logo from "../../Assets/img/LogoCircular.png";
import Footer from "../Footer/Footer";

import NavBar from "../NavBar/NavBar";
import LoaderComponent from "../Loader/Loading";

const StyledContenedor = styled.div`
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 75px;
  height: fit-content;

  .logoayuda {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 200px;
    width: 200px;
    animation-name: Rock;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes Rock {
      0% {
        color: ${Colors.Platinum};
        transform: scale(1);
      }
      50% {
        color: rgba(4, 19, 24, 0);
        transform: scale(1.09);
      }
      100% {
        color: ${Colors.Platinum};
        transform: scale(1);
      }
    }
  }

  .Sections {
    margin: 2.2% 5%;
    background: rgba(20, 33, 61, 0.65);
    height: 100%;
    width: 32.2%;
    border-radius: 50px;
    font-family: "RocknRoll One";
    color: #ffffff;
    padding: 2%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: "New Rocker", cursive;
      border-bottom: 3px solid white;
      margin: 0px;
      color: ${Colors.Platinum};
      font-size: 4rem;
    }
    h2 {
      text-align: center;
      color: ${Colors.Dark_Cornflower_blue};
    }
  }
`;

const FooterStyledCont = styled.footer`
  position: relative;
  background-color: ${Colors.Oxford_Blue};
  box-sizing: border-box;
  height: fit-content;
  margin-left: 70px;
  padding-left: 25px;
  color: white;
  font-size: 3rem;
`;

export default function Faqs() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <StyledContenedor>
            <NavBar Home />
            <div className="Sections">
              <h1>Preguntas frecuentes</h1>
              <br />
              <h2>¿Cómo funciona RockStarPlace.com?</h2>
              <p>
                Rock Star Place es una plataforma que conecta entre sí a artistas con dueños de espacios para tocar, bares, pubs, etc. con el objetivo
                de organizar y compartir shows. Los anfitriones pueden publicar shows en la plataforma y compartirlos con la comunidad para que los
                artistas con ganas de tocar se postulen y puedan ser seleccionados para formar parte del lineup.
              </p>
              <br />
              <h2>¿Qué diferencia hay entre el perfil de artista y el de anfitrión?</h2>
              <p>
                En RockStarPlace.com el perfil de Artistas está pensado para los que quieren encontrar un lugar para tocar y te permite mostrarle a la
                comunidad cómo es tu proyecto musical a traves de tus redes sociales. El perfil Anfitrión es para aquellos que tienen un espacio para
                ofrecer, centro cultural, bar o boliche. Los anfitriones son aquellos que cuentan con un espacio y organizan shows, y lo comparten con
                la comunidad para que los artistas se postulen.
              </p>
              <br />
              <h2>Tengo un espacio ¿Cómo hago para conseguir bandas y organizar un show?</h2>
              <p>
                Primero debes registrate como anfitrión en nuestra página web completando el formulario, en donde podrás cargar tu espacio y crear
                shows, para que los artistas de la comunidad se postulen para tocar.
              </p>
              <br />
              <h2>¿Cual es el costo?</h2>
              <p>
                En RockStarPlace.com hacemos esto por y para la Música, por este motivo redujimos los costos al maximo posible. Tanto el registo, como
                las postulaciones a las fechas son totalmente gratuitos para las bandas. Solo se cobrará una minima suscripción de $500 ars a los
                locales cuando se registren, para que puedan comenzar a utilizar el sitio.
              </p>
              <br />
              <h2>¿Cuales son los metodos de pago?</h2>
              <p>El pago podrá a realizarse a través de mercadoPago, pudiendo seleccionar la manera que más se adapte a tus necesidades!</p>
            </div>
            <img src={Logo} className="logoayuda" alt="Logo" />
            <div className="Sections B">
              <h1>Ayuda</h1>
              <br />
              <h2>Tengo una banda/soy artista ¿Cómo me registro en RockStarPlace.com?</h2>
              <p>
                Registrarte con nosotros es muy fácil y lo mas importante... ¡Es GRATIS! Podes ingresar con tu cuenta de Google o podés registrarte
                con tu email. Son tres simples pasos y ya formaras parte de nuestra comunidad.
              </p>
              <br />
              <h2>¿Cómo aplico a una fecha?</h2>
              <p>
                Para postularte para tocar en una fecha tenés que seleccionar un show de la página principal o de los resultados de búsqueda, ir al
                listado de fechas disponibles y elegir la que prefieras haciendo clic en APLICA. Se le notificará al local que estás interesado en
                tocar y en caso de aceptarte, podrán empezar a organizar la fecha por su cuenta. La fecha se agregará a la sección Mis Fechas desde
                donde podrás darle seguimiento a tu postulación.
              </p>
              <br />
              <h2>Soy músico ¿Cómo administro mis fechas?</h2>
              <p>
                En EVENTOS, vas a poder administrar las solicitudes que hiciste. Ahí vas a ver el listado de fechas en las que te postulaste, la fecha
                de la misma y el estado de tu solicitud que puede ser: Pendiente o Cerrada.
              </p>
              <br />
              <h2>Soy anfitrión ¿Cómo administro mis Shows?</h2>
              <p>
                En HOME vas a ver el listado de shows que estás organizando. Desde allí vas a poder administrar las postulaciones que hicieron otros
                músicos para tocar en cada una de tus fechas. Ahí podrás aceptarlas, rechazarlas o añadir nuevas fechas disponibles
              </p>
            </div>
          </StyledContenedor>
          <FooterStyledCont>
            <Footer />
          </FooterStyledCont>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}
