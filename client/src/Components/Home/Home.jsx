import axios from "axios";
import React, { useState } from "react";
import HomeBL from "./HomeBL";
import HomeLL from "./HomeLL";
import HomeUNL from "./HomeUNL";

import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";
import { decodeCookieInfo } from "../../Utils/google.auth.controller";

function Home() {

  const [reloadState, setReloadState] = useState(1);

  const ifIsSocial = async () => {
    if (localStorage.getItem("loggedWithGoogle")) {
      const { data } = await axios.get("/auth/cookie-info", { withCredentials: true });
      localStorage.setItem("user-token", data);
      setReloadState(reloadState + 1);
      if (localStorage.getItem("role")) {
        const user = await decodeCookieInfo(data);
        await axios({
          method: "post",
          url: "/auth/change/type",
          data: {
            role: localStorage.getItem("role"),
            email: user.email,
          },
        });
        localStorage.removeItem("role");
        const homeURL = process.env.REACT_APP_API || "http://localhost:3000/";
        window.location.replace(homeURL);
      }
      localStorage.removeItem("loggedWithGoogle");
    }
  };
  ifIsSocial();

  if (isMusicband()) return <HomeBL />;
  if (isPlace()) return <HomeLL />;
  if (isAdmin()) return <p>This is admin component</p>;
  return <HomeUNL />;
}

export default Home;
