import React from "react";
import { Link } from "react-router-dom";

export default function Faqs() {
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <br />
      <h2>¿Cómo funciona RockStarPlace.com?</h2>
      <p>
        Rock Star Place es una plataforma que conecta entre sí a artistas con dueños de espacios
        para tocar, bares, pubs, etc. con el objetivo de organizar y compartir shows. Los
        anfitriones pueden publicar shows en la plataforma y compartirlos con la comunidad para que
        los artistas con ganas de tocar se postulen y puedan ser seleccionados para formar parte del
        lineup.
      </p>
      <br />
      <h2>¿Qué diferencia hay entre el perfil de artista y el de anfitrión?</h2>
      <p>
        En RockStarPlace.com el perfil de Artistas está pensado para los que quieren encontrar un
        show para tocar y te permite mostrarle a la comunidad cómo es tu proyecto musical a traves
        de fotos y/o videos. El perfil Anfitrión es para aquellos que tienen un espacio para tocar,
        centro cultural, bar o boliche. Los anfitriones son aquellos que cuentan con un espacio y
        organizan shows, y lo comparten con la comunidad para que los artistas se postulen.
      </p>
      <br />
      <h2>Tengo un espacio ¿Cómo hago para conseguir bandas y organizar un show?</h2>
      <p>
        Primero debes registrate como anfitrión en nuestra página web completando el formulario:
        Registro - Anfitriones en donde podrás cargar tu espacio y crear shows, para que los
        artistas de la comunidad se postulen para tocar.
      </p>
      <br />
      <h2>¿Cual es el costo?</h2>
      <p>
        En RockStarPlace.com hacemos esto por y para la Música, por este motivo redujimos los costos
        al maximo posible. Tanto el registo, como las postulaciones y las publicaciones de las
        fechas son totalmente gratuitos. Solo se cobrará una minima tarifa a ambas partes cuando se
        efectue el match entre la banda/artista y el espacio publicado.
      </p>
      <br />
      <h2>¿Cuales son los metodos de pago?</h2>
      <p>...</p>
      <Link to="/">
        <button type="button">Volver</button>
      </Link>
    </div>
  );
}
