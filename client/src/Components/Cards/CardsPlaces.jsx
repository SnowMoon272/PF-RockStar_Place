import React from "react";
import styled from "styled-components";
import color from "../../Utils/colors";
import CardPlace from "./CardPlace";

const CardsStyleCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.Green_Nigth};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function CardsPlaces({ currentPlaces }) {
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
            />
          );
        })}
    </CardsStyleCont>
  );
}

export default CardsPlaces;
