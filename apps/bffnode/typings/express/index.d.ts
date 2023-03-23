import type { PlayerAuthJwt } from "@nirvai-web/types";
import type { ParseParamsInterface } from "@nirvai-web/data";
declare global {
  namespace Express {
    export interface Request {
      auth?: PlayerAuthJwt;
      useParams: ParseParamsInterface;
    }
  }
}
