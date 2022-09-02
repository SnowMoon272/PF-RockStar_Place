import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import IconMarker from "../../Assets/svg/Marker.svg";

const MapStyleCont = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100vw;
    height: 100vh;
  }
`;

export default function MapView() {

  const IconLocation = L.icon({
    iconUrl: IconMarker,
    iconRetinaUrl: IconMarker,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });

  return (
    <MapStyleCont>
      <Map center={{ lat: "-34.54616189434735", lng: "-58.68595958861292" }} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={{ lat: "-34.54616189434735", lng: "-58.68595958861292" }}
          icon={IconLocation}
        />
      </Map>
    </MapStyleCont>
  );
}
