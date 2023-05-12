import type { FC } from "react";

import { NullComponent } from "Library";

export interface ModalInterface {
  Body: FC;
  //
  Footer?: FC;
  Header?: FC;
}
export const Modal: FC<ModalInterface> = ({
  Body,
  //
  Header = NullComponent,
  Footer = NullComponent,
}) => (
  <section className="ima modal">
    <Header />
    <Body />
    <Footer />
  </section>
);
