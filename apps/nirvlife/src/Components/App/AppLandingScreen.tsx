import { useTheme } from "@mui/material";

import { Img, TextCopy } from "Library";
import { ctaStacks, nirvaiRef, taglineRef } from "data";
import { ReactFP, FPContainer, FPItem } from "react-fullerpage";
// <img src={"/img/logo_main.png"} className="img" alt="nirvai" />

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  // {/* <Img key="img" uris={["/img/girljumping.jpg"]} width={500} height={500} /> */}
  return (
    <ReactFP style={{}}>
      <FPContainer>
        <FPItem
          style={{
            backgroundColor: "lime",
            height: "80vh",
            padding: "1em",
          }}
        >
          <article>
            <TextCopy data={ctaStacks[0][0]} />
          </article>
        </FPItem>

        <FPItem
          style={{
            backgroundColor: "coral",
            padding: "1em",
          }}
        >
          <article>
            <TextCopy data={nirvaiRef} longform />
          </article>
        </FPItem>

        <FPItem
          style={{
            backgroundColor: "firebrick",
            padding: "1em",
          }}
        >
          <article>
            <TextCopy data={taglineRef} full />
          </article>
        </FPItem>
      </FPContainer>
    </ReactFP>
  );
};
