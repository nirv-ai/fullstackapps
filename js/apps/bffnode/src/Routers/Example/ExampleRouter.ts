import { Router } from "express";
import type { ValidationChain } from "express-validator";

import * as R from "./Routes";
import * as validators from "Middleware/Validators";

const V = validators as unknown as Record<string, ValidationChain[]>;

// @see https://expressjs.com/en/api.html#express.router
const router = Router({
  mergeParams: true,
  caseSensitive: false,
  strict: false,
});

router.get(
  "/",
  V.SkillsGetValidator,
  V.ValidationFailedResponse,
  AsyncWrapper(R.SkillsGetRoute)
);
router.post(
  "/",
  V.SkillCreateValidator,
  V.ValidationFailedResponse,
  AsyncWrapper(R.SkillCreateRoute)
);
router.post(
  "/search",
  V.SearchValidator,
  V.ValidationFailedResponse,
  AsyncWrapper(R.SearchSkillsRoute)
);
router.get(
  "/s/:name",
  V.SkillGetValidator,
  V.ValidationFailedResponse,
  AsyncWrapper(R.SkillGetRoute)
);
router.patch(
  "/s/:name",
  V.SkillEditValidator,
  V.ValidationFailedResponse,
  AsyncWrapper(R.SkillEditRoute)
);

export const SkillsRouter = router;
