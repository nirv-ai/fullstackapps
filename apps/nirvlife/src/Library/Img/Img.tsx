import type { FC } from "react";

import { IdealImage } from "react-idealer-image";
// import { IdealImage } from "../../../node_modules/react-ideal-image/src";

import { useMemo, useEffect, useState } from "react";

export interface ImgInterface {
  height: number;
  uris: string[];
  width: number;
  //
  alt?: string;
  [x: string]: any;
}

export const Img: FC<ImgInterface> = ({
  height,
  uris,
  width,

  //
  alt = "ima image",
  ...props
}) => {
  const srcSet = useMemo(
    () => uris.map((src) => ({ src, width })),
    [uris, width]
  );

  return (
    <section {...props}>
      <IdealImage alt={alt} srcSet={srcSet} height={height} width={width} />
    </section>
  );
};
