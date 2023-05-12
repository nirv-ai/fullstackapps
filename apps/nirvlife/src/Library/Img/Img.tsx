import type { FC } from "react";

import IdealImage from "react-ideal-image";
import { useMemo, useEffect, useState } from "react";

export interface ImgInterface {
  height: number;
  uris: string[];
  width: number;
  //
  alt?: string;
  [x: string]: any;
}

export type ImgBase64 = Pick<ImgInterface, "height" | "width">;

const fakeImgs = new Map<string, Promise<string>>();
// @see https://stackoverflow.com/questions/37004315/create-base64-encoded-images-with-javascript
export const base64Img = async ({
  width,
  height,
}: ImgBase64): Promise<string> => {
  const imgKey = `${width}${height}`;
  if (fakeImgs.has(imgKey)) return fakeImgs.get(imgKey);

  const img = new Image();

  img.setAttribute("crossOrigin", "anonymous");

  fakeImgs.set(
    imgKey,
    new Promise((resolve) => {
      img.onerror = () => {
        resolve(
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        );
      };
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        resolve(
          canvas
            .toDataURL("image/png")
            .replace(/^data:image\/(png|jpg);base64,/, "")
        );
      };
    })
  );

  img.src = `https://dummyimage.com/${height}x${width}/000/fff`;

  return fakeImgs.get(imgKey);
};

// @see https://loremflickr.com/
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

  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    let ignore = false;
    if (placeholder) return null;

    base64Img({ width, height }).then((base64) => {
      if (!ignore) setPlaceholder(base64);
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <IdealImage
      placeholder={{ lqip: placeholder }}
      alt={alt}
      srcSet={srcSet}
      height={height}
      width={width}
    />
  );
};