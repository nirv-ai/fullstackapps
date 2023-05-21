import { FC } from "react";

import { slogan } from "data";
import { TextCopy } from "Library";

export const AppFooter: FC = () => (
  <footer>
    <h5>
      <TextCopy data={slogan} />
    </h5>
  </footer>
);
