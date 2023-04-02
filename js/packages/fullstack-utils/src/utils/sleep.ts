// @see https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout

export const sleep = async (milliseconds = 2) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds * 1000);
  }).catch((e) => {
    console.error("\n\n error in waitForSleep", e);
  });
};

// ensure this default syncs with theme.sleepTime.normal
export const waitForSleep = async (seconds = 1): Promise<void> => {
  if (!seconds) return void 0;
  await sleep(seconds);
};
