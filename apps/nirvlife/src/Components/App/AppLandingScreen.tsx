import { useTheme } from "@mui/material";

import { AppAbout } from "./AppAbout";
import { Img } from "Library";

import girljumping from "../../../public/img/girljumping.jpg";

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  console.info("\n\n wtf is img", girljumping);
  return (
    <article>
      <Img key="img" uris={[girljumping]} width={500} height={500} />
      <AppAbout key="appabout" />
    </article>
  );
};
