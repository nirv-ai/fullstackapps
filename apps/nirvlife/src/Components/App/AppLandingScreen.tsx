import { useTheme } from "@mui/material";

import { Img, TextCopy } from "Library";
import { ctaStacks, nirvaiRef, taglineRef } from "data";
// <img src={"/img/logo_main.png"} className="img" alt="nirvai" />

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  return (
    <article id={screenId}>
      {/* <Img key="img" uris={["/img/girljumping.jpg"]} width={500} height={500} /> */}
      <TextCopy data={ctaStacks[0][0]} />
      <TextCopy data={nirvaiRef} longform />
      <TextCopy data={taglineRef} full />
    </article>
  );
};
