import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPlace } from "../../Redux/actions";

export default function DetailPlace() {
  const dispatch = useDispatch();
  const params = useParams();
  const myPlace = useSelector((state) => state.detail_place);

  useEffect(() => dispatch(getDetailPlace(params.email)), [dispatch]);

  return (
    <div>
      <div>
        <h1>{myPlace.name}</h1>
        <h4>Rating: {myPlace.rating}</h4>
        <h3>Descripción</h3>
        <p>{myPlace.description}</p>
        <hr />
        <h3>Próximos eventos</h3>
        <p>...</p>
        <hr />
        <h3>Ubicación</h3>
        <p>...</p>
        <hr />
        <h3>Comentarios</h3>
        <p>...</p>
        <hr />
      </div>
      <div>
        <img src={myPlace.profilePicture} alt="Img not found" width="380px" height="250px" />
        <p>Ciudad: {myPlace.city}</p>
        <p>Dirección: {myPlace.adress}</p>
        <p>Capacidad: {myPlace.capacity}</p>
        <p>Sonido Propio: {myPlace.hasSound ? "Si" : "No"}</p>
        <hr />
        <p>Email: {myPlace.email}</p>
      </div>
    </div>
  );
}
