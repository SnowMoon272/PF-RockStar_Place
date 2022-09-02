import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces, getMusicBands } from "../../../Redux/actions";

const GraficoBarrasStyleCont = styled.div`
  height: 30%;
  width: 27%;
  margin-top: -10%;
`;

function GraficaRegistrados() {
  const dispatch = useDispatch();
  const allPlaces = useSelector((state) => state.places);
  const allBands = useSelector((state) => state.musicBands);

  useEffect(async () => {
    dispatch(getPlaces());
    dispatch(getMusicBands());
  }, []);

  const totalPlaces = allPlaces.length;
  const totalBands = allBands.length;

  const data = {
    labels: ["Músicos o bandas", "Locales"],
    datasets: [
      {
        label: "Fechas concretadas",
        backgroundColor: ["#0a005f", "#007914"],
        data: [totalBands, totalPlaces],
      },
    ],
  };

  const opciones = {
    responsive: true,
  };

  return (
    <GraficoBarrasStyleCont>
      <Pie data={data} options={opciones} />
    </GraficoBarrasStyleCont>
  );
}

export default GraficaRegistrados;
