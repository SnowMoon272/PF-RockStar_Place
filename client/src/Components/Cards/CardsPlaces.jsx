/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import CardPlace from "./CardPlace";

const CardsStyleCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function CardsPlaces({ currentPlaces, UserLog }) {
  return (
    <CardsStyleCont>
      {currentPlaces &&
        currentPlaces.map((place) => {
          return (
            <CardPlace
              key={place._id}
              id={place._id}
              name={place.name}
              city={place.city}
              sound={place.hasSound ? "Sí" : "No"}
              rating={place.rating}
              image={place.profilePicture}
              UserLog={UserLog}
            />
          );
        })}
    </CardsStyleCont>
  );
}

export default CardsPlaces;
