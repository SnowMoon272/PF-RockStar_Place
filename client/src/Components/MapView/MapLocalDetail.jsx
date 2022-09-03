import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import Colors from "../../Utils/colors";
import IconMarker from "../../Assets/svg/Marker.svg";

const MapStyleCont = styled.div`
  box-sizing: border-box;
  margin-top: 2.5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  .PlaceTitle {
    font-family: "New Rocker";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${Colors.Oxford_Blue};
  }
`;

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

export default function MapLocalDetail({ placePosition, placeName }) {
  return (
    <MapStyleCont>
      <Map center={placePosition} zoom={15} scrollWheelZoom={false} attributionControl={false} dragging={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={placePosition} icon={IconLocation}>
          <Popup closePopupOnClick={false}>
            <span className="PlaceTitle">{placeName}</span>
          </Popup>
        </Marker>
      </Map>
    </MapStyleCont>
  );
};
