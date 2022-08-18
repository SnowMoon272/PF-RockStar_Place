import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <h1>Ayuda</h1>
      <p>Acá podes encontrar ayuda de los pasos más importantes para usar el sitio</p>
      <br />
      <h2>¿Qué es RockStarPlace.com?</h2>
      <p>Rock Star Place es una plataforma que busca conectarte con la Música. </p>
      <p>
        Disponemos de distintos usuarios para satisfacer tu necesidad de búsqueda, con la idea de
        conectar, organizar y difundir Shows en distintos lugares del país y que con un solo Click
        puedas ser parte de esta experencia.
      </p>
      <p>
        Si tenes un espacio dónde quieras que toquen artistas, te conectamos con ellos; si vos sos
        músico y estas buscando el lugar ideal para tocar, nuestra página es tu lugar ideal.
      </p>
      <br />
      <h2>Tengo una banda/soy artista ¿Cómo me registro en RockStarPlace.com?</h2>
      <p>
        Registrarte con nosotros es muy fácil y lo mas importante... ¡Es GRATIS!. Hacé Click en el
        boton -Registrate Ahora-. Podes ingresar con tu cuenta de Facebook, de Google o podés
        registrarte con tu email. Son tres simples pasos y ya formaras parte de nuestra comunidad.
      </p>
      <br />
      <h2>Tengo un espacio para tocar ¿Cómo me registro en RockStarPlace.com?</h2>
      <p>
        Para aprovechar todo el potencial de RockStarPlace.com tenés que registrarte. ¡Es muy fácil
        y gratis! Si tenés un espacio para tocar, centro cultural, bar o boliche debes registrarte
        como Anfitrión. Podés hacerlo haciendo Click en el boton -Registrate Ahora- y completar
        todos los datos del formulario.
      </p>
      <br />
      <h2>¿Cómo publico un show?</h2>
      <p>
        ¡¡¡VER!!! Para crear una publicación debes ir a Publicar y completar todos los datos
        requeridos como el título, la descripción, en qué espacio se llevará a cabo y el rider
        técnico necesario. Podés agregar una imagen ilustrativa, como un flyer o una foto de la
        banda. Es muy importante que definas el tipo de fecha: si es una sola fecha o si el show
        cuenta con varias fechas ya definidas. En validez de la oferta, podés definir hasta cuántas
        horas previas tienen las bandas para aplicar.
      </p>
      <br />
      <h2>¿Cómo aplico a una fecha?</h2>
      <p>
        ¡¡¡VER!!! Para postularte para tocar en una fecha tenés que seleccionar un show de la página
        principal o de los resultados de búsqueda, ir al listado de fechas disponibles y elegir la
        que prefieras haciendo clic. Se te va a abrir una ventana donde vas a poder dejarle un
        mensaje al organizador del show, luego hacé clic en el botón ¡QUIERO TOCAR! Una vez que
        envíes el mensaje, la fecha se agregará a la sección Mis Fechas desde donde podrás darle
        seguimiento a tu postulación.
      </p>
      <br />
      <h2>Soy músico ¿Cómo administro mis fechas?</h2>
      <p>
        ¡¡¡VER x 2!!! En la sección Mis Fechas, vas a poder administrar las solicitudes que hiciste
        para tocar en shows haciendo clic en MIS SOLICITUDES: ahí vas a ver el listado de fechas en
        las que te postulaste, la fecha de la misma y el estado de tu solicitud que puede ser:
        Nueva, Aprobada, Rechazada o Cancelada. Además podés chatear con el organizador haciendo
        clic en el ícono del chat. Si haces clic en MIS OFRECIMIENTOS, vas a ver el listado de Shows
        que estás organizando. Desde allí vas a poder administrar las postulaciones que hicieron
        otros músicos para tocar en tus shows. Para eso tenés que hacer clic en Ver solicitudes. Se
        van a desplegar las distintas fechas de tu show y en cada una vas a poder ver cuántas
        postulaciones nuevas tenés, cuáles aceptaste, cuáles rechazaste y cuáles aún están
        pendientes. Si por alguna razón debiste cancelar la fecha podés eliminarla haciendo clic en
        el ícono Cancelar Fecha. Si haces clic en una de las fechas vas a poder conversar con el
        postulante desde el chat. Si se pusieron de acuerdo podes aceptar su postulación y, si no es
        lo que tu show necesita, podés rechazarla.
      </p>
      <br />
      <h2>Soy anfitrión ¿Cómo administro mis Shows?</h2>
      <p>
        ¡¡¡VER!!! En Mis Shows vas a ver el listado de shows que estás organizando. Desde allí vas a
        poder administrar las postulaciones que hicieron otros músicos para tocar en cada una de tus
        fechas. Para eso tenés que hacer clic en Ver solicitudes. Se van a desplegar las distintas
        fechas de tu show y en cada una vas a poder ver cuántas postulaciones nuevas tenés, cuáles
        aceptaste, cuáles rechazaste y cuáles aún están pendientes. Si por alguna razón debiste
        cancelar la fecha podés eliminarla haciendo clic en el ícono Cancelar Fecha. Si haces clic
        en una de las fechas vas a poder conversar con el postulante desde el chat. Si se pusieron
        de acuerdo podes aceptar su postulación y, si no es lo que tu show necesita, podés
        rechazarla.
      </p>
      <Link to="/">
        <button type="button">Volver</button>
      </Link>
    </div>
  );
}
