import React from "react";
import DetailPlaceBL from "./DetailPlaceBL";
import DetailPlaceUNL from "./DetailPlaceNL";
import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";

function DetailPlace() {
  if (isMusicband()) return <DetailPlaceBL />;
  if (isPlace()) return <p>This is Place component</p>;
  if (isAdmin()) return <p>This is admin component</p>;
  return <DetailPlaceUNL />;
}

export default DetailPlace;
