import type { Request, Response } from "express";

import { Errors } from "@nirvai-web/data";

import { getDbCore, nirvDbCoreSql } from "../../../Data";

export const SearchSkillsRoute = async (req: Request, res: Response) => {
  const useParams = req.useParams as SkillsSearchRequestInterface;

  if (!useParams.args.length) {
    const error = Errors.InvalidRequestError();
    return res.status(error.statusCode).end(error);
  }

  return (await getDbCore())
    .task("skills-get-search", async (t) => {
      const items = await t.manyOrNone(
        nirvDbCoreSql.skills.searchSkillsQuery,
        useParams
      );

      return { items, count: items.length };
    })
    .then(({ count, items }) => {
      return res.json({ count, items });
    });
};
