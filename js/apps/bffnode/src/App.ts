import { Server } from "./Server";

Server().catch((e) => {
  console.error("\n\n error starting server", e);
});
