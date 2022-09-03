import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Map, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import { updatePlaceCoords } from "../../Redux/actions";
import IconMarker from "../../Assets/svg/Marker.svg";
import Colors from "../../Utils/colors";

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

  .bttDone {
    border: none;
    font-family: "RocknRoll One";
    font-weight: 400;
    font-size: 2.2rem;
    position: relative;
    bottom: 2%;
    border-radius: 10px;
    background-color: ${Colors.Blue_life};
    width: 14%;
    height: 40px;
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

  .bttCurrPos {
    border: none;
    font-family: "RocknRoll One";
    font-weight: 400;
    font-size: 2.5rem;
    position: relative;
    right: 42%;
    top: 1%;
    border-radius: 10px;
    background-color: ${Colors.Blue_life};
    width: 6%;
    height: 30px;
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

export default function MapView({ setPOPSwitch, POPSwitch, coords }) {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const markerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coords) {
      if (coords.lat === "" && coords.lng === "") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentPosition({
              lng: position.coords.longitude,
              lat: position.coords.latitude,
            });
            setPosition({
              lng: position.coords.longitude,
              lat: position.coords.latitude,
            });
          },
          (error) => error,
          {
            enableHighAccuracy: true,
          },
        );
      } else {
        setCurrentPosition(coords);
        setPosition(coords);
      }
    }
  }, [coords]);

  const updatePosition = () => {
    const marker = markerRef.current;
    if (marker != null) {
      setPosition(marker.leafletElement.getLatLng());
    }
  };

  const handleDone = (e) => {
    e.preventDefault();
    dispatch(updatePlaceCoords(position));
    setPOPSwitch(!POPSwitch);
  };

  const handleCurrentPos = (e) => {
    e.preventDefault();
    setPosition(currentPosition);
  };

  return (
    <MapStyleCont>
      <Map center={position} zoom={15} scrollWheelZoom={true} attributionControl={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href=" https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={IconLocation}
          draggable={true}
          ref={markerRef}
          onDragend={updatePosition}
        />
      </Map>
      <button className="bttCurrPos" onClick={(e) => handleCurrentPos(e)} type="button">↺</button>
      <button className="bttDone" onClick={(e) => handleDone(e)} type="button">Listo</button>
    </MapStyleCont>
  );
}
