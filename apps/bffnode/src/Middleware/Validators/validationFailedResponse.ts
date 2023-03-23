import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const ValidationFailedResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).end({ errors: errors.array() });

  next();
};
