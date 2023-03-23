import { json, urlencoded, type Express } from "express";
import { parser } from "@nirvai-web/data";

const jsonParser = () => {
  // @see https://expressjs.com/en/api.html#express.json
  const jsonOptions = {
    inflate: true,
    limit: "100kb",
    type: "application/json",
    strict: false,
  };

  return json(jsonOptions);
};

const urlEncodedParser = () => {
  // @see https://expressjs.com/en/api.html#express.urlencoded
  const urlEncodedOptions = {
    extended: true,
    inflate: true,
    limit: "100kb",
    parameterLimit: 1000,
    type: "application/x-www-form-urlencoded",
  };

  return urlencoded(urlEncodedOptions);
};

export const addBodyParserMiddleware = (app: Express) => {
  app.use(jsonParser());
  app.use(urlEncodedParser());
};
