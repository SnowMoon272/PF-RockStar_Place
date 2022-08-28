import React from "react";
import DetailPlaceBL from "./DetailPlaceBL";
import DetailPlaceUNL from "./DetailPlaceNL";
import DetailPlaceLL from "../PerfilesLogueados/PerfilLocal";
import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";

function DetailPlace() {
  if (isMusicband()) return <DetailPlaceBL />;
  if (isPlace()) return <DetailPlaceLL />;
  if (isAdmin()) return <p>This is Place component</p>;
  return <DetailPlaceUNL />;
}

export default DetailPlace;
