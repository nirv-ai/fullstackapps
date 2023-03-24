import { useTheme } from "@mui/material";

import { AppAbout } from "./AppAbout";

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  return <AppAbout />;
};
