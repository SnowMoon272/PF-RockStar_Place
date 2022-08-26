import React from "react";
import HomeBL from "./HomeBL";
import HomeLL from "./HomeLL";
import HomeUNL from "./HomeUNL";

import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";

function Home() {
  if (isMusicband()) return <HomeBL />;
  if (isPlace()) return <HomeLL />;
  if (isAdmin()) return <p>This is admin component</p>;
  return <HomeUNL />;
}

export default Home;
