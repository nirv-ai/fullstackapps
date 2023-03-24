export const getVars = ({ flexSize }: { flexSize: string }) => ({
  spacing: 6,
  sleepTime: {
    major: 1.5,
    normal: 1, // ensure this syncs with waitForSleep(seconds)
    minor: 0.5,
  },
  fontSizes: {
    huge: "2rem",
    biggest: "1.7rem",
    bigger: "1.5rem",
    big: "1.3rem",
    normal: "1rem",
    small: "0.7rem",
    smaller: "0.5rem",
  },
  spaces: {
    spacing: 2,
    columnSpacing: 2,
    rowSpacing: 2,
    huge: "2.5rem",
    biggest: "2rem",
    bigger: "1.75rem",
    big: "1.5rem",
    normal: "1rem",
    small: "0.5rem",
    smaller: "0.25rem",
    smallest: "0.1rem",
  },
  widths: {
    // @see https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
    input: flexSize,
    rowHeight: "1.5rem",
    rowHeightHalf: "0.75rem",
    huge: "28rem",
    biggest: "26rem",
    bigger: "24rem",
    big: "22rem",
    normal: "20rem",
    small: "17rem",
    smaller: "14rem",
    smallest: "11rem",
  },
});
