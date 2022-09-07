import React from "react";
import { useNavigate } from "react-router-dom";
import DetailPlaceBL from "./DetailPlaceBL";
import DetailPlaceUNL from "./DetailPlaceNL";
import DetailPlaceLL from "../PerfilesLogueados/PerfilLocal";
import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";

function DetailPlace() {
  const navigate = useNavigate();

  if (isMusicband()) return <DetailPlaceBL />;
  if (isPlace()) return <DetailPlaceLL />;
  if (isAdmin()) navigate("/");
  return <DetailPlaceUNL />;
}

export default DetailPlace;
