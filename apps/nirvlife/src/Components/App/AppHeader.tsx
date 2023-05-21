import { FC } from "react";

import { nirvai, nirvaiRef } from "data";
import { TextCopy } from "Library";

export const AppHeader: FC = () => (
  <header>
    <h1>
      <TextCopy data={nirvai} EL="button" />
    </h1>
  </header>
);
