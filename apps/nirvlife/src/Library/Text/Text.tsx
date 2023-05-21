import { useMemo, type FC } from "react";
import classNames from "classnames";

import { LinkTo } from "Library";
import type { CopyInterface } from "data";

/**
 * keep this as minimal as possible so its fully automated
 * prefer a higher order component like TextCopy for customization
 */
export interface TextInterface extends Pick<CopyInterface, "copy"> {
  //
  url?: string;
  classes?: string;
  EL?: keyof JSX.IntrinsicElements;
  [x: string]: any;
}
export const Text: FC<TextInterface> = ({ copy, classes, EL, ...props }) => {
  const cn = useMemo(() => classNames("text", classes), [classes]);

  if (props.url || EL === "a" || EL === "button")
    return <LinkTo classes={cn} copy={copy} {...props} EL={EL as "a" & "b"} />;
  if (Array.isArray(copy))
    return (
      <p>
        {copy.map((text, i) => (
          <Text
            copy={`${text}${i + 1 < copy.length ? " " : ""}`}
            classes={classes}
            EL={EL}
            {...props}
            key={`${text}-${i}`}
          />
        ))}
      </p>
    );

  const MyEl = EL || "span";
  return (
    <MyEl className={cn} {...props}>
      {copy}
    </MyEl>
  );
};

/*
 * accepts a standard copy interface with additional props
 * for specifying exactly how to render in a given context
 */
export interface TextCopy extends Omit<TextInterface, "copy"> {
  data: CopyInterface;
  //
  textProps?: Omit<TextInterface, "copy">;
  longform?: boolean;
}
export const TextCopy: FC<TextCopy> = ({
  data,
  //
  longform = false,
  classes,
  EL,
  textProps = {},
}) => {
  const elementProps = useMemo(() => {
    switch (EL) {
      case "a":
        return {
          url: data.url,
        };
      default:
        return {};
    }
  }, [data, EL]);

  return (
    <Text
      {...elementProps}
      {...textProps}
      classes={classes}
      copy={(longform && data.longform) || data.copy}
      EL={EL}
    />
  );
};
