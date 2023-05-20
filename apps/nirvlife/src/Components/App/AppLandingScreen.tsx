import { useTheme } from "@mui/material";

import { AppAbout } from "./AppAbout";
import { Img } from "Library";

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  return (
    <article>
      {/* <Img key="img" uris={["/img/girljumping.jpg"]} width={500} height={500} /> */}
      <AppAbout key="appabout" />
    </article>
  );
};
