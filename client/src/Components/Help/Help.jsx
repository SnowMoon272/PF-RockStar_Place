import React from "react";
import { isAuthenticated } from "../../Utils/auth.controller";
import HelpLogeado from "./HelpLogeado";
import HelpNoLogeado from "./HelpNoLogeado";

function Help() {
  if (isAuthenticated()) {
    return <HelpLogeado />;
  }
  return <HelpNoLogeado />;
}

export default Help;
