import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../../Redux/actions";
import CardsPlaces from "../Cards/CardsPlaces";

export default function HomePrueba() {

  const dispatch = useDispatch();

  const allPlaces = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  return (
    <div className="container">
      <CardsPlaces currentPlaces={allPlaces} />
    </div>
  );
}
