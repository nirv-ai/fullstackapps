import { useTheme } from "@mui/material";

import { Img, TextCopy } from "Library";
import { ctaStacks, nirvaiRef, taglineRef } from "data";
// import { ReactFP, FPContainer, FPItem } from "react-fullerpage";
import {
  ReactFP,
  FPContainer,
  FPItem,
} from "../../../node_modules/react-fullerpage/src";
import girljumping from "./imgs/girljumping.jpg";

const screenId = "app-landing-screen";
export const AppLandingScreen = () => {
  const theme = useTheme();

  return (
    <ReactFP style={{}}>
      <div>hello</div>
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
            {/* <Img key="img" uris={["/img/girljumping.jpg"]} width={300} /> */}
            <Img key="img" uris={[girljumping]} width={300} />
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
