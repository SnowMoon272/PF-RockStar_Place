import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import IconMarker from "../../Assets/svg/Marker.svg";
import Colors from "../../Utils/colors";
import { updatePlaceCoords } from "../../Redux/actions";

const MapStyleCont = styled.div`
  box-sizing: border-box;
  margin-top: 2.5%;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .leaflet-container {
    width: 90%;
    height: 100%;
  }

  .bttListo {
    border: none;
    font-family: "New Rocker";
    margin-top: 2%;
    font-weight: 400;
    font-size: 2rem;
    border-radius: 10px;
    background-color: ${Colors.Blue_life};
    width: 8%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.Platinum};
    text-decoration: none;
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
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

export default function MapView() {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [viewPosition, setViewPosition] = useState({ lat: 0, lng: 0 });
  const [move, setMove] = useState(false);
  const markerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
        setViewPosition({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
        setMarkerPosition({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      (error) => error,
      {
        enableHighAccuracy: true,
      },
    );
  });

  const updatePosition = () => {
    const marker = markerRef.current;
    if (marker != null) {
      setMarkerPosition(marker.leafletElement.getLatLng());
      setViewPosition(marker.leafletElement.getLatLng());
      setMove(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(updatePlaceCoords(markerPosition));
  };

  return (
    <MapStyleCont>
      <Map center={move ? viewPosition : currentPosition} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={move ? markerPosition : currentPosition}
          icon={IconLocation}
          draggable={true}
          ref={markerRef}
          onDragend={updatePosition}
        /* onClick={handleClick} */
        >
          <Popup closePopupOnClick={false} minWidth={90}>
            <span>{move
              ? "Esta es la posicion de su local"
              : "Esta es su posición actual"}
            </span>
          </Popup>
        </Marker>
      </Map>
      <button className="bttListo" onClick={(e) => handleClick(e)} type="button">Listo</button>
    </MapStyleCont>
  );
}
