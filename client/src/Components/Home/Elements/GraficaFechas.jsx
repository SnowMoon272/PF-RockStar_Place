/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../../../Redux/actions";

// const TotalGraficosStyleCont = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
// `;

const GraficoBarrasStyleCont = styled.div`
  height: 75%;
  width: 50%;
`;

function GraficaFechas() {
  const dispatch = useDispatch();
  const allPlaces = useSelector((state) => state.places);

  useEffect(async () => {
    dispatch(getPlaces());
  }, []);

  const confirmedDates = allPlaces.map((place) => place.dates).flat();

  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
      {
        label: "Fechas concretadas",
        backgroundColor: "#7b6cff",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "#00f54988",
        hoverBorderColor: "#FF000",
        data: [34, 55, 67, 88, 144, 25, 89, 100, confirmedDates.length, 0, 0, 0],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
    labels: {
      fontColor: "red",
    },
  };

  return (
    // <TotalGraficosStyleCont>
    <GraficoBarrasStyleCont>
      <Bar data={data} options={opciones} />
    </GraficoBarrasStyleCont>
    // </TotalGraficosStyleCont>
  );
}

export default GraficaFechas;
