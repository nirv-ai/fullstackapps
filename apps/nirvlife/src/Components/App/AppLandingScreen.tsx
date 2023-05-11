import { useTheme } from "@mui/material";

import { AppAbout } from "./AppAbout";
import { Img } from "Library";

// TODO(noah): this returns correct img but typescript errors
// ^think it has to do with public not being in src dir
// import girljumping from "../../../public/img/girljumping.jpg";

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  // console.info("\n\n wtf is img", girljumping);
  return (
    <article>
      <Img key="img" uris={["/img/girljumping.jpg"]} width={500} height={500} />
      <AppAbout key="appabout" />
    </article>
  );
};
