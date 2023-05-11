import type { FC } from "react";

// TODO(noah): bun has issue importing from fork?
// import IdealImage from "react-ideal-image";
import IdealImage from "../../../node_modules/react-ideal-image/src/index";
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
        // TODO(noah): this shouldnt return a string but run the same fn as onload
        resolve(
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        );
      };
      // TODO(noah); extract this logic to a fn for reuse in onerror
      // TODO(noah): pretty sure we can convert an svg to base64 and drop dummyimages.com
      // ^@see https://stackoverflow.com/questions/28450471/convert-inline-svg-to-base64-string
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
    <section {...props}>
      <IdealImage
        // TODO:(noah): this throws
        // ^ dumb idea to load a fake image over the wire
        // ^ inline a cool looking svg
        // placeholder={{ lqip: placeholder }}
        placeholder={{ color: "black" }}
        alt={alt}
        srcSet={srcSet}
        height={height}
        width={width}
      />
    </section>
  );
};
